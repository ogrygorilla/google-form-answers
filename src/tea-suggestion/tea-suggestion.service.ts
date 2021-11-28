import { Injectable } from '@nestjs/common';
import { GoogleFormAnswerService } from 'src/google-form-answer/google-form-answer.service';
import { CreateTeaSuggestionDto } from './dto/create-tea-suggestion.dto';
import { UpdateTeaSuggestionDto } from './dto/update-tea-suggestion.dto';
import * as fs from 'fs';
import * as path from 'path';

const TEA_VARIANTS_PATH = path.resolve('src/tea-suggestion/tea-variants.json');

@Injectable()
export class TeaSuggestionService {
  constructor(
    private readonly googleFormAnswerService: GoogleFormAnswerService,
  ) {}

  create(createTeaSuggestionDto: CreateTeaSuggestionDto) {
    return 'This action adds a new teaSuggestion';
  }

  getTeaSuggestionForLastGoogleFormAnswer() {
    // get last answer
    const lastAnswer = this.googleFormAnswerService.getLastAnswer();
    const teaSuggestion = this.getTeaSuggestion(lastAnswer);
    // find proper tea (comparing with tea-variants file)
    return JSON.stringify(lastAnswer);
  }

  getTeaSuggestion(googleFormAnswer: any) {
    const teaVariants = this.getAllTeaVariantFromFile();
    return '';
  }

  getAllTeaVariantFromFile() {
    try {
      return fs.readFileSync(TEA_VARIANTS_PATH, 'utf8');
    } catch (e) {
      console.log('Error by reading file: ', TEA_VARIANTS_PATH, '\nerror: ', e);
    }
  }

  findAll() {
    return `This action returns all teaSuggestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teaSuggestion`;
  }

  update(id: number, updateTeaSuggestionDto: UpdateTeaSuggestionDto) {
    return `This action updates a #${id} teaSuggestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} teaSuggestion`;
  }
}
