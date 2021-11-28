import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { TeaSuggestionService } from './tea-suggestion.service';
import { CreateTeaSuggestionDto } from './dto/create-tea-suggestion.dto';
import { UpdateTeaSuggestionDto } from './dto/update-tea-suggestion.dto';

@Controller('tea-suggestion')
export class TeaSuggestionController {
  constructor(private readonly teaSuggestionService: TeaSuggestionService) {}

  @Post()
  create(@Body() createTeaSuggestionDto: CreateTeaSuggestionDto) {
    return this.teaSuggestionService.create(createTeaSuggestionDto);
  }

  @Get()
  teaSuggestionForLastGoogleFormAnswer() {
    return this.teaSuggestionService.getTeaSuggestionForLastGoogleFormAnswer();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teaSuggestionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTeaSuggestionDto: UpdateTeaSuggestionDto,
  ) {
    return this.teaSuggestionService.update(+id, updateTeaSuggestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teaSuggestionService.remove(+id);
  }
}
