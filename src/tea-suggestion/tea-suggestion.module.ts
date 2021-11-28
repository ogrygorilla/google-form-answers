import { Module } from '@nestjs/common';
import { TeaSuggestionService } from './tea-suggestion.service';
import { TeaSuggestionController } from './tea-suggestion.controller';

@Module({
  controllers: [TeaSuggestionController],
  providers: [TeaSuggestionService]
})
export class TeaSuggestionModule {}
