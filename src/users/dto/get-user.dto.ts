import { IsEmail, IsNumber, IsString } from 'class-validator';

export class GetUserDTO {
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly first_name?: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password?: string;
}
