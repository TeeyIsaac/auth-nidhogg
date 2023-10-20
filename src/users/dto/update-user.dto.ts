import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class UpdateUserDTO {
  @IsInt()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
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
  @Length(6, 12)
  readonly password: string;

  @IsDate()
  readonly updateAt?: Date;
}
