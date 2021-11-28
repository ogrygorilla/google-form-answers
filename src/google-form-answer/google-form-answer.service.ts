import { Injectable } from '@nestjs/common';
import { CreateGoogleFormAnswerDto } from './dto/create-google-form-answer.dto';
import { UpdateGoogleFormAnswerDto } from './dto/update-google-form-answer.dto';
import * as fs from 'fs';
import * as path from 'path';

const GOOGLE_FORM_ANSWERS_PATH = path.resolve(
  'src/google-form-answer/google-form-answers.json',
);

@Injectable()
export class GoogleFormAnswerService {
  create(createGoogleFormAnswerDto: CreateGoogleFormAnswerDto) {
    return 'This action adds a new googleFormAnswer';
  }

  getAllAnswersFromFile() {
    console.log(
      'DIRNAME: ',
      path.resolve('src/google-form-answer/google-form-answers.json'),
    );
    let googleFormAnswers: any;
    try {
      googleFormAnswers = fs.readFileSync(GOOGLE_FORM_ANSWERS_PATH, 'utf8');
    } catch (e) {
      console.log(
        'Error by reading file: ',
        GOOGLE_FORM_ANSWERS_PATH,
        '\nerror: ',
        e,
      );
    }
    return googleFormAnswers;
  }

  writeAnswerToFile(createGoogleFormAnswerDto: CreateGoogleFormAnswerDto) {
    const data = JSON.parse(fs.readFileSync(GOOGLE_FORM_ANSWERS_PATH, 'utf8'));
    data.push(createGoogleFormAnswerDto);
    try {
      fs.writeFileSync(GOOGLE_FORM_ANSWERS_PATH, JSON.stringify(data), 'utf8');
    } catch (e) {
      console.log(
        'Error by writing to file: ',
        GOOGLE_FORM_ANSWERS_PATH,
        '\nerror: ',
        e,
      );
    }
  }

  getLastAnswer() {
    const answers: any = JSON.parse(this.getAllAnswersFromFile());
    return answers[answers.length - 1];
  }

  findAll() {
    return `This action returns all googleFormAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} googleFormAnswer`;
  }

  update(id: number, updateGoogleFormAnswerDto: UpdateGoogleFormAnswerDto) {
    return `This action updates a #${id} googleFormAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} googleFormAnswer`;
  }
}
