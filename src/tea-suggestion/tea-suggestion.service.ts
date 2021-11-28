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

  getTeaSuggestionForLastGoogleFormAnswer() {
    // get last answer
    const lastAnswer = this.googleFormAnswerService.getLastAnswer();
    const teaSuggestion = this.getTeaSuggestion(lastAnswer);
    return JSON.stringify(teaSuggestion);
  }

  getTeaSuggestion(googleFormAnswer: any) {
    const matches = new Array(4).fill(0);
    const teaVariants = this.getAllTeaVariantFromFile();

    // find matches
    teaVariants.forEach((teaVariant, index) => {
      Object.keys(teaVariant).forEach((key) => {
        if (teaVariant[key] === googleFormAnswer[key]) {
          matches[index]++;
        }
      });
    });

    // find most matched tea index
    const max = Math.max(...matches);
    const variantIndex = matches.indexOf(max);

    // make suggestion
    const suggestion =
      variantIndex !== -1 && max !== 0
        ? teaVariants[variantIndex]['teaName']
        : 'No matches found';

    console.log(teaVariants);
    console.log(googleFormAnswer);
    console.log(matches);
    console.log(suggestion);
    return suggestion;
  }

  getAllTeaVariantFromFile() {
    try {
      return JSON.parse(fs.readFileSync(TEA_VARIANTS_PATH, 'utf8'));
    } catch (e) {
      console.log('Error by reading file: ', TEA_VARIANTS_PATH, '\nerror: ', e);
    }
  }

  create(createTeaSuggestionDto: CreateTeaSuggestionDto) {
    return 'This action adds a new teaSuggestion';
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
