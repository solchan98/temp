import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { DailyReport } from '../entities/dailyReport';

@Injectable()
export class DailyReportService {
  constructor(
    @InjectRepository(DailyReport)
    private readonly repository: Repository<DailyReport>,
  ) {}

  async getDailyReportByDate(startDate: Date, endDate: Date): Promise<any> {
    const data = await this.repository.find({
      where: {
        date: Between(startDate, endDate),
      },
    });

    const daily = data.map((value) => {
      const {
        id,
        imp,
        click,
        cost,
        conv,
        convValue,
        ctr,
        cvr,
        cpc,
        cpa,
        roas,
        date,
      } = value;
      return {
        id: Number(id),
        imp: Number(imp),
        click: Number(click),
        cost: Number(cost),
        conv: Number(conv),
        convValue: Number(convValue),
        ctr: Number(ctr),
        cvr: Number(cvr),
        cpc: Number(cpc),
        cpa: Number(cpa),
        roas: Number(roas),
        date,
      };
    });

    return {
      report: { daily },
    };
  }

  async addData(data) {
    await this.repository.save(data);
  }
}
