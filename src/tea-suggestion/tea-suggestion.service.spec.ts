import { Test, TestingModule } from '@nestjs/testing';
import { TeaSuggestionService } from './tea-suggestion.service';

describe('TeaSuggestionService', () => {
  let service: TeaSuggestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeaSuggestionService],
    }).compile();

    service = module.get<TeaSuggestionService>(TeaSuggestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
