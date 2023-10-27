import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDTO, LoginUserDTO } from './dto/index';
import { AuthGuard } from './auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('dashboard')
  @HttpCode(HttpStatus.OK)
  authDashBoard(@Req() req: any) {
    return { message: 'Entro a la dashboard', data: req.user };
  }
}
