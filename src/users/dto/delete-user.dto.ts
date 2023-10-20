import { IsInt } from 'class-validator';

export class DeleteUserDTO {
  @IsInt()
  readonly id: number;
}
