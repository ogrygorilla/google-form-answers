import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleFormAnswerDto } from './create-google-form-answer.dto';

export class UpdateGoogleFormAnswerDto extends PartialType(CreateGoogleFormAnswerDto) {}
