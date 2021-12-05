import { NestFactory } from '@nestjs/core';

//Esto es para activar las dependencias de validacion de 'class-validator
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            // whitelist: Este ignora un dato corrupto que no esta definido en el DTO
            whitelist: true,
            // forbidNonWhitelisted: Este alerta al cliente cuando quieren inyectar datos o campos maliciosos
            forbidNonWhitelisted: true,
        }),
    );
    await app.listen(3000);
}

bootstrap();
