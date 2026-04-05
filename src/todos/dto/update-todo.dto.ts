import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  targetDate?: string;

  @IsString()
  @IsOptional()
  assignedUserName?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
