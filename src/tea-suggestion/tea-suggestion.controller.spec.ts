import { Test, TestingModule } from '@nestjs/testing';
import { TeaSuggestionController } from './tea-suggestion.controller';
import { TeaSuggestionService } from './tea-suggestion.service';

describe('TeaSuggestionController', () => {
  let controller: TeaSuggestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeaSuggestionController],
      providers: [TeaSuggestionService],
    }).compile();

    controller = module.get<TeaSuggestionController>(TeaSuggestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
