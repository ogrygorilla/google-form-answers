import { Test, TestingModule } from '@nestjs/testing';
import { GoogleFormAnswerService } from './google-form-answer.service';

describe('GoogleFormAnswerService', () => {
  let service: GoogleFormAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleFormAnswerService],
    }).compile();

    service = module.get<GoogleFormAnswerService>(GoogleFormAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
