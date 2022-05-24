import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DailyReportService } from './daily-report.service';
import * as dayjs from 'dayjs';

interface IDate {
  startDate: Date;
  endDate: Date;
}

export const getPrevDateByCurDate = (startDate, endDate): IDate => {
  const DATE_FORM = 'YYYY-MM-DD';
  const diffDay = dayjs(endDate).diff(startDate, 'd') + 1;
  const prevStartDate = dayjs(startDate)
    .subtract(diffDay, 'd')
    .format(DATE_FORM);
  const prevEndDate = dayjs(prevStartDate)
    .add(diffDay - 1, 'd')
    .format('YYYY-MM-DD');
  return {
    startDate: new Date(prevStartDate),
    endDate: new Date(prevEndDate),
  };
};

@Controller('/api/v1/daily-report')
export class DailyReportController {
  constructor(private readonly service: DailyReportService) {}

  @Get('')
  public async getDailyReportListByDate(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    const prevDate = getPrevDateByCurDate(startDate, endDate);
    const curData = await this.service.getDailyReportByDate(startDate, endDate);
    const prevData = await this.service.getDailyReportByDate(
      prevDate.startDate,
      prevDate.endDate,
    );
    return {
      curData,
      prevData,
    };
  }

  @Post('')
  public async addData(@Body() data) {
    await this.service.addData(data);
  }
}
