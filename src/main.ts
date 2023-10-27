import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const host: string = configService.get('URL_HOST');
  const port: number = configService.get('URL_PORT');
  const prefix: string = configService.get('URL_PREFIX');

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.setGlobalPrefix(`/${prefix}`);

  await app.listen(port, () => {
    console.log(`[🚀] Server online in host: ${host}:${port}/${prefix}/`);
  });
}
bootstrap();
