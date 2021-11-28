import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleFormAnswerModule } from './google-form-answer/google-form-answer.module';
import { TeaSuggestionModule } from './tea-suggestion/tea-suggestion.module';

@Module({
  imports: [GoogleFormAnswerModule, TeaSuggestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
