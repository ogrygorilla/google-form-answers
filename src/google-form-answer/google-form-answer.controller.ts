import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';

import { GoogleFormAnswerService } from './google-form-answer.service';
import { CreateGoogleFormAnswerDto } from './dto/create-google-form-answer.dto';
import { UpdateGoogleFormAnswerDto } from './dto/update-google-form-answer.dto';

@Controller('google-form-answer')
export class GoogleFormAnswerController {
  constructor(
    private readonly googleFormAnswerService: GoogleFormAnswerService,
  ) {}

  @Post()
  addGoogleFormAnswer(@Req() req): void {
    console.log(req);
    const googleFormData = req.body;
    console.log('new answer data:', googleFormData);
  }

  @Get()
  getAllGoogleFormAnswersFromFile() {
    return this.googleFormAnswerService.getAllfromFile();
  }
  // @Get()
  // findAll() {
  //   return this.googleFormAnswerService.findAll();
  // }

  // @Post()
  // create(@Body() createGoogleFormAnswerDto: CreateGoogleFormAnswerDto) {
  //   return this.googleFormAnswerService.create(createGoogleFormAnswerDto);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.googleFormAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGoogleFormAnswerDto: UpdateGoogleFormAnswerDto,
  ) {
    return this.googleFormAnswerService.update(+id, updateGoogleFormAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.googleFormAnswerService.remove(+id);
  }
}
