import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertising } from '../entities/advertising';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertisingService {
  constructor(
    @InjectRepository(Advertising)
    private readonly repository: Repository<Advertising>,
  ) {}

  async getAdvertisingList(): Promise<any> {
    const data = await this.repository.find();
    const ads = data.map((value) => {
      return {
        id: Number(value.id),
        adType: value.adType,
        title: value.title,
        budget: Number(value.budget),
        status: value.status,
        startDate: value.startDate,
        endDate: value.endDate,
        report: {
          cost: Number(value.cost),
          convValue: Number(value.convValue),
          roas: Number(value.roas),
        },
      };
    });

    return {
      count: ads.length,
      ads,
    };
  }
}
