import { Injectable } from '@nestjs/common';
import { PrismalibService } from 'src/prismalib/prismalib.service';
import { CreateUserDTO, GetUserDTO } from './dto/index';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismalibService) {}

  async createUser(userData: CreateUserDTO): Promise<CreateUserDTO> {
    const userCreate = await this.prismaService.user.create({
      data: {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
        createAt: new Date(),
      },
    });

    return userCreate;
  }

  async getUserFromEmail(userData: GetUserDTO): Promise<GetUserDTO> {
    const userGet = await this.prismaService.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    return userGet;
  }
}
