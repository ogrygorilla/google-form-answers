import { Test, TestingModule } from '@nestjs/testing';
import { GoogleFormAnswerController } from './google-form-answer.controller';
import { GoogleFormAnswerService } from './google-form-answer.service';

describe('GoogleFormAnswerController', () => {
  let controller: GoogleFormAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleFormAnswerController],
      providers: [GoogleFormAnswerService],
    }).compile();

    controller = module.get<GoogleFormAnswerController>(GoogleFormAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
