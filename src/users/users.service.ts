import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { PrismalibService } from 'src/prismalib/prismalib.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismalibService) {}

  async createUser(userData: UserModel): Promise<UserModel> {
    const userDataModel = userData;
    const userCreate = await this.prismaService.user.create({
      data: {
        first_name: userDataModel.first_name,
        last_name: userDataModel.last_name,
        email: userDataModel.email,
        password: userDataModel.password,
        token: userDataModel.token,
        createAt: new Date(),
      },
    });

    return userCreate;
  }
}
