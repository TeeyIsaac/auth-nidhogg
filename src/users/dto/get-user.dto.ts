import { IsDate, IsEmail, IsInt, IsJWT, IsString } from 'class-validator';

export class GetUserDTO {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly first_name: string;

  @IsString()
  readonly last_name: string;

  @IsString()
  readonly email: string;

  @IsEmail()
  readonly password?: string;

  @IsJWT()
  readonly token?: string;

  @IsDate()
  readonly createAt: Date;

  @IsDate()
  readonly updateAt?: Date;
}
