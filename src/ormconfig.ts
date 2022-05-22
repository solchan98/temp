import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advertising } from './entities/advertising';
import { DailyReport } from './entities/dailyReport';
import { MediaReport } from './entities/mediaReport';

const ormConfig: TypeOrmModuleOptions = {
  type: '',
  host: '',
  port: 1234,
  username: '',
  password: '',
  database: '',
  entities: [Advertising, DailyReport, MediaReport],
  synchronize: true,
};
module.exports = ormConfig;
