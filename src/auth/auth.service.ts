import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/models/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(userRegister: UserModel): Promise<object> {
    const user = await this.userService.createUser(userRegister);

    return {
      access_token: await this.jwtService.signAsync(user),
    };
  }
}
