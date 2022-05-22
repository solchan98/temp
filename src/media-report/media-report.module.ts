import { Module } from '@nestjs/common';
import { MediaReportService } from './media-report.service';
import { MediaReportController } from './media-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaReport } from '../entities/mediaReport';

@Module({
  imports: [TypeOrmModule.forFeature([MediaReport])],
  providers: [MediaReportService],
  controllers: [MediaReportController],
  exports: [MediaReportService],
})
export class MediaReportModule {}
