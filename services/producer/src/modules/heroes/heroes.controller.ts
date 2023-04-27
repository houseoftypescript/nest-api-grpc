import { Metadata } from '@grpc/grpc-js';
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

interface HeroesService {
  findOne(data: { id: number }): Observable<any>;
}

type Hero = {
  id: number;
  name: string;
};

@ApiTags('Heroes')
@Controller('heroes')
export class HeroesController {
  private heroesService: HeroesService;

  constructor(@Inject('HEROES_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  @Get(':id')
  getById(@Param('id') id: number): Observable<Hero> {
    const metadata = new Metadata();
    metadata.add('Set-Cookie', 'yummy_cookie=choco');
    return this.heroesService.findOne({ id });
  }
}
