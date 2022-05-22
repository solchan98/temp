import { Module } from '@nestjs/common';
import { DailyReportService } from './daily-report.service';
import { DailyReportController } from './daily-report.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyReport } from '../entities/dailyReport';

@Module({
  imports: [TypeOrmModule.forFeature([DailyReport])],
  providers: [DailyReportService],
  controllers: [DailyReportController],
  exports: [DailyReportService],
})
export class DailyReportModule {}
