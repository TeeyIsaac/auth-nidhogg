import { Module } from '@nestjs/common';
import { PrismalibService } from './prismalib.service';

@Module({
  providers: [PrismalibService],
  exports: [PrismalibService],
})
export class PrismaLibModule {}
