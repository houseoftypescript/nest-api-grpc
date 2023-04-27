import { Controller, Get } from '@nestjs/common';
import { HealthResponseDto } from './health.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class HealthController {
  @Get('/health')
  @ApiResponse({ type: HealthResponseDto })
  getHealth(): HealthResponseDto {
    return { status: 'OK' };
  }
}
