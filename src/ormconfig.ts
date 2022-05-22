import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Advertising } from './entities/advertising';
import { DailyReport } from './entities/dailyReport';
import { MediaReport } from './entities/mediaReport';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 54320,
  username: 'sol',
  password: '1234',
  database: 'madup',
  entities: [Advertising, DailyReport, MediaReport],
  synchronize: true,
};
module.exports = ormConfig;
