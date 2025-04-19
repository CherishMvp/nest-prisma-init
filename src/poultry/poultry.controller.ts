import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PoultryService } from './poultry.service';
import { CreatePoultryDto } from './dto/create-poultry.dto';
import { UpdatePoultryDto } from './dto/update-poultry.dto';

@Controller('poultry')
export class PoultryController {
  constructor(private readonly poultryService: PoultryService) {}

  @Post()
  create(@Body() createPoultryDto: CreatePoultryDto) {
    return this.poultryService.create(createPoultryDto);
  }

  @Get()
  findAll() {
    return this.poultryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.poultryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoultryDto: UpdatePoultryDto) {
    return this.poultryService.update(+id, updatePoultryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poultryService.remove(+id);
  }
}
