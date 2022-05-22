import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisingModule } from './advertising/advertising.module';
import { DailyReportModule } from './daily-report/daily-report.module';
import { MediaReportModule } from './media-report/media-report.module';
import * as ormConfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    AdvertisingModule,
    DailyReportModule,
    MediaReportModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
