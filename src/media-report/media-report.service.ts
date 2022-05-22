import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { MediaReport } from '../entities/mediaReport';

@Injectable()
export class MediaReportService {
  constructor(
    @InjectRepository(MediaReport)
    private readonly repository: Repository<MediaReport>,
  ) {}

  async getMediaReportListByDate(startDate: Date, endDate: Date): Promise<any> {
    const data = await this.repository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });
    data.forEach((value) => {
      value.imp = Number(value.imp);
      value.click = Number(value.click);
      value.cost = Number(value.cost);
      value.convValue = Number(value.convValue);
      value.ctr = Number(value.ctr);
      value.cvr = Number(value.cvr);
      value.cpc = Number(value.cpc);
      value.cpa = Number(value.cpa);
      value.roas = Number(value.roas);
    });
    return data;
  }

  async addData(data) {
    await this.repository.save(data);
  }
}
