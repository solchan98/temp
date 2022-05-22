import { Module } from '@nestjs/common';
import { AdvertisingController } from './advertising.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertising } from '../entities/advertising';
import { AdvertisingService } from './advertising.service';

@Module({
  imports: [TypeOrmModule.forFeature([Advertising])],
  providers: [AdvertisingService],
  controllers: [AdvertisingController],
  exports: [AdvertisingService],
})
export class AdvertisingModule {}
