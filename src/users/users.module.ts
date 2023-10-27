import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaLibModule } from 'src/prismalib/prismalib.module';

@Module({
  imports: [PrismaLibModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
