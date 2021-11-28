import { PartialType } from '@nestjs/mapped-types';
import { CreateTeaSuggestionDto } from './create-tea-suggestion.dto';

export class UpdateTeaSuggestionDto extends PartialType(CreateTeaSuggestionDto) {}
