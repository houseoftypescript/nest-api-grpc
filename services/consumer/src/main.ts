import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'heroes',
      protoPath: join(__dirname, 'modules/heroes/heroes.proto'),
    },
  });
  await app.listen();
};

bootstrap();
