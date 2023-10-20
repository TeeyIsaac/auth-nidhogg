import { Injectable } from '@nestjs/common';
import { PrismalibService } from 'src/prismalib/prismalib.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { GetUserDTO } from './dto/get-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismalibService) {}

  async createUser(userData: CreateUserDTO): Promise<CreateUserDTO> {
    const { first_name, last_name, email, password, token } = userData;
    const userCreate: CreateUserDTO = await this.prismaService.user.create({
      data: {
        first_name,
        last_name,
        email,
        password,
        token,
        createAt: new Date(),
      },
    });

    return userCreate;
  }

  async getUsers(): Promise<GetUserDTO[]> {
    const usersGet: GetUserDTO[] = await this.prismaService.user.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        createAt: true,
        updateAT: true,
      },
    });

    return usersGet;
  }

  async getUser(userData: GetUserDTO): Promise<GetUserDTO> {
    const { id } = userData;
    const userGet: GetUserDTO = await this.prismaService.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
        token: true,
        createAt: true,
        updateAT: true,
      },
    });

    return userGet;
  }

  async updateUser(userData: UpdateUserDTO): Promise<UpdateUserDTO> {
    const { id, first_name, last_name, email, password } = userData;
    const userUpdate: UpdateUserDTO = await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        first_name,
        last_name,
        email,
        password,
        updateAT: new Date(),
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
        token: true,
        updateAT: true,
        createAt: false,
      },
    });

    return userUpdate;
  }

  async deleteUser(userData: DeleteUserDTO): Promise<DeleteUserDTO> {
    const { id } = userData;
    const userDelete: DeleteUserDTO = await this.prismaService.user.delete({
      where: {
        id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: true,
        token: true,
        updateAT: true,
        createAt: true,
      },
    });

    return userDelete;
  }
}
