import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DailyReportService } from './daily-report.service';

@Controller('daily-report')
export class DailyReportController {
  constructor(private readonly service: DailyReportService) {}

  @Get('')
  public async getDailyReportListByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return await this.service.getDailyReportByDate(startDate, endDate);
  }

  @Post('')
  public async addData(@Body() data) {
    await this.service.addData(data);
  }
}
