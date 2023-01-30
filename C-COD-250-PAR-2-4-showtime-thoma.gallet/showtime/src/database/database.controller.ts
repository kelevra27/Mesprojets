import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateDatabaseDto } from './dto/create-database.dto';
import { UpdateDatabaseDto } from './dto/update-database.dto';

@Controller('database')
export class DatabaseController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Post()
  create(@Body() createDatabaseDto: CreateDatabaseDto) {
    // return this.databaseService.create(createDatabaseDto);
  }

  @Get()
  findAll() {
    // return this.databaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.databaseService.findOne(+id);
  }

  @Put(':id')
  update(@Body() updateDatabaseDto: UpdateDatabaseDto) {
    // return this.databaseService.update(+id, updateDatabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.databaseService.remove(+id);
  }
}
