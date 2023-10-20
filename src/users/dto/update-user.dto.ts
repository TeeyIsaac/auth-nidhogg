import {
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UpdateUserDTO {
  @IsInt()
  readonly id: number;

  @IsString()
  @IsOptional()
  @Length(3, 10)
  readonly first_name: string;

  @IsString()
  @IsOptional()
  @Length(3, 16)
  readonly last_name: string;

  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsString()
  @IsOptional()
  @Length(6, 12)
  readonly password: string;

  @IsDate()
  readonly updateAt?: Date;
}
