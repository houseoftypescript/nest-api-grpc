import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HEROES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'heroes',
          protoPath: join(__dirname, 'heroes.proto'),
        },
      },
    ]),
  ],
  controllers: [HeroesController],
})
export class HeroesModule {}
