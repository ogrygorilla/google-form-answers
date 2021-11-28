import { Module } from '@nestjs/common';
import { TeaSuggestionService } from './tea-suggestion.service';
import { TeaSuggestionController } from './tea-suggestion.controller';
import { GoogleFormAnswerModule } from 'src/google-form-answer/google-form-answer.module';

@Module({
  controllers: [TeaSuggestionController],
  providers: [TeaSuggestionService],
  imports: [GoogleFormAnswerModule],
})
export class TeaSuggestionModule {}
