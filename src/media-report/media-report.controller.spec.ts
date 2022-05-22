import { Test, TestingModule } from '@nestjs/testing';
import { MediaReportController } from './media-report.controller';

describe('MediaReportController', () => {
  let controller: MediaReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaReportController],
    }).compile();

    controller = module.get<MediaReportController>(MediaReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
