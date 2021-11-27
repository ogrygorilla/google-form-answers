import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleFormAnswerModule } from './google-form-answer/google-form-answer.module';

@Module({
  imports: [GoogleFormAnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
