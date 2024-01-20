import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'https://localhost:8080',
      'http://localhost:8080',
      'https://superlative-semolina-63b0b0.netlify.app',
      'http://superlative-semolina-63b0b0.netlify.app',
      'https://superlative-semolina-63b0b0.netlify.app',
      'http://superlative-semolina-63b0b0.netlify.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
