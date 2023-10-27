import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO, LoginUserDTO } from './dto/index';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  authRegister(@Body() requestBody: RegisterUserDTO) {
    return this.authService.registerUser(requestBody);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  authLogin(@Body() requestBody: LoginUserDTO) {
    return this.authService.loginUser(requestBody);
  }
}
