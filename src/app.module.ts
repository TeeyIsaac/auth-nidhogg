import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismalibService } from './prismalib/prismalib.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [PrismalibService],
})
export class AppModule {}
