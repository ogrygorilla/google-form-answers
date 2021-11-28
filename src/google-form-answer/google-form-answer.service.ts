import { Injectable } from '@nestjs/common';
import { CreateGoogleFormAnswerDto } from './dto/create-google-form-answer.dto';
import { UpdateGoogleFormAnswerDto } from './dto/update-google-form-answer.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GoogleFormAnswerService {
  create(createGoogleFormAnswerDto: CreateGoogleFormAnswerDto) {
    return 'This action adds a new googleFormAnswer';
  }

  async getAllfromFile() {
    console.log(
      'DIRNAME: ',
      path.resolve('src/google-form-answer/google-form-answers.json'),
    );
    let googleFormAnswers: any;
    const googleFormAnswersPath = path.resolve(
      'src/google-form-answer/google-form-answers.json',
    );
    try {
      googleFormAnswers = fs.readFileSync(googleFormAnswersPath, 'utf8');
    } catch (e) {
      console.log(
        'Error by reading file: ',
        googleFormAnswersPath,
        '\nerror: ',
        e,
      );
    }
    return googleFormAnswers;
  }

  writeAnswerToFile(createGoogleFormAnswerDto: CreateGoogleFormAnswerDto) {
    const googleFormAnswersPath = path.resolve(
      'src/google-form-answer/google-form-answers.json',
    );
    // const test = {
    //   noCaffeine: 'Yes',
    //   sweet: 'Yes',
    //   fruity: 'Yes',
    //   vanilla: 'Yes',
    // };
    try {
      fs.writeFileSync(
        googleFormAnswersPath,
        JSON.stringify(createGoogleFormAnswerDto),
        'utf8',
      );
    } catch (e) {
      console.log(
        'Error by writing to file: ',
        googleFormAnswersPath,
        '\nerror: ',
        e,
      );
    }
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
