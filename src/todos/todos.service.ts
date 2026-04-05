import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  /** GET /todos — lista tareas activas (deletedAt IS NULL) */
  findAll() {
    return this.prisma.toDo.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
  }

  /** GET /todos/:id — devuelve una tarea; 404 si está eliminada */
  async findOne(id: number) {
    const todo = await this.prisma.toDo.findFirst({
      where: { id, deletedAt: null },
    });
    if (!todo) throw new NotFoundException(`Tarea #${id} no encontrada`);
    return todo;
  }

  /** POST /todos — crea una tarea nueva */
  create(dto: CreateTodoDto) {
    return this.prisma.toDo.create({
      data: {
        title: dto.title,
        description: dto.description,
        targetDate: dto.targetDate ? new Date(dto.targetDate) : null,
        assignedUserName: dto.assignedUserName,
      },
    });
  }

  /** PATCH /todos/:id — actualiza campos parciales */
  async update(id: number, dto: UpdateTodoDto) {
    await this.findOne(id); // lanza 404 si no existe o está eliminada
    return this.prisma.toDo.update({
      where: { id },
      data: {
        ...(dto.title && { title: dto.title }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.targetDate !== undefined && {
          targetDate: dto.targetDate ? new Date(dto.targetDate) : null,
        }),
        ...(dto.assignedUserName !== undefined && {
          assignedUserName: dto.assignedUserName,
        }),
        ...(dto.status && { status: dto.status }),
      },
    });
  }

  /** DELETE /todos/:id — soft delete: rellena deletedAt con UTC actual */
  async remove(id: number) {
    await this.findOne(id); // lanza 404 si no existe o ya está eliminada
    await this.prisma.toDo.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return { message: 'deleted' };
  }
}
