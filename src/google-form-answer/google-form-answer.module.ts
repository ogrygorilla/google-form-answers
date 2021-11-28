import { Module } from '@nestjs/common';
import { GoogleFormAnswerService } from './google-form-answer.service';
import { GoogleFormAnswerController } from './google-form-answer.controller';

@Module({
  controllers: [GoogleFormAnswerController],
  providers: [GoogleFormAnswerService],
  exports: [GoogleFormAnswerService],
})
export class GoogleFormAnswerModule {}
