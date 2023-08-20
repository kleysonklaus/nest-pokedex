import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // extrae la data en una white list las que tengan DTO
      forbidNonWhitelisted: true, // obliga a no mandar mas propiedades de las necesarias
    }),
  );

  await app.listen(3000);
}
bootstrap();
