import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import AppDataSource from './data/data-source';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Identity')
    .setDescription('Service for identity')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
      return AppDataSource.runMigrations();
    })
    .then(() => {
      console.log('Migrations have been run!');
      app.useGlobalPipes(new ValidationPipe());
      return app.listen(PORT);
    })
    .then(() => {
      console.log(`Application is running on: http://localhost:${PORT}`);
    })
    .catch((error) => {
      console.error(
        'Error during Data Source initialization or migration execution',
        error,
      );
      process.exit(1);
    });
}

bootstrap();
