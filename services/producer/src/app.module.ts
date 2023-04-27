import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { HeroesModule } from './modules/heroes/heroes.module';

@Module({
  imports: [HealthModule, HeroesModule],
})
export class AppModule {}
