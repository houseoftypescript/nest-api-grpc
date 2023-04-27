import { Module } from '@nestjs/common';
import { HeroesModule } from './modules/heroes/heroes.module';

@Module({ imports: [HeroesModule] })
export class AppModule {}
