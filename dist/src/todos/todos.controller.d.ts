import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        title: string;
        description: string | null;
        targetDate: Date | null;
        assignedUserName: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        title: string;
        description: string | null;
        targetDate: Date | null;
        assignedUserName: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    create(dto: CreateTodoDto): import(".prisma/client").Prisma.Prisma__ToDoClient<{
        title: string;
        description: string | null;
        targetDate: Date | null;
        assignedUserName: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateTodoDto): Promise<{
        title: string;
        description: string | null;
        targetDate: Date | null;
        assignedUserName: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
