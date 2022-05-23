import { Controller, Get } from '@nestjs/common';
import { AdvertisingService } from './advertising.service';

@Controller('/api/v1/advertising')
export class AdvertisingController {
  constructor(private readonly service: AdvertisingService) {}

  @Get('/')
  public async getAdvertisingList() {
    return await this.service.getAdvertisingList();
  }
}
