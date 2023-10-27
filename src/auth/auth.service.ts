import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO, GetUserDTO } from 'src/users/dto/index';
import { UsersService } from 'src/users/users.service';
import { genSalt, hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async CryptPassword(password: string): Promise<string> {
    const salt = await genSalt(20);
    return hash(password, salt);
  }

  async registerUser(userData: CreateUserDTO): Promise<CreateUserDTO> {
    const newPassword = await this.CryptPassword(userData.password);

    const userCreate = await this.userService.createUser({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: newPassword,
    });

    return userCreate;
  }

  async loginUser(userData: GetUserDTO): Promise<{ token: string }> {
    const userLogin = await this.userService.getUserFromEmail({
      email: userData.email,
    });

    const passwordCompare = await compare(
      userData.password,
      userLogin.password,
    );

    if (!passwordCompare) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: userLogin.id,
      firstName: userLogin.first_name,
      email: userLogin.email,
    };

    return { token: await this.jwtService.signAsync(payload) };
  }
}
