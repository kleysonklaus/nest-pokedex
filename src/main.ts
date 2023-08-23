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

      transform: true,                // transforma las querys que viene a los DTO con sus formatos
      transformOptions: {
        enableImplicitConversion: true
      }

    }),
  );

  // await app.listen(3000);
  await app.listen(process.env.PORT);

  console.log(`app running in port ${process.env.PORT}`)
}
bootstrap();
