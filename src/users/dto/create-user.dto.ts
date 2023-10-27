import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @Length(3, 12)
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 16)
  readonly last_name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 20)
  readonly password: string;
}
