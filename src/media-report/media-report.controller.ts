import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MediaReportService } from './media-report.service';

@Controller('/api/v1/media-report')
export class MediaReportController {
  constructor(private readonly service: MediaReportService) {}

  @Get('')
  public async getMediaReportListByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.service.getMediaReportListByDate(startDate, endDate);
  }

  @Post('')
  public async addData(@Body() data) {
    await this.service.addData(data);
  }
}
