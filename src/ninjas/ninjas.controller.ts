// CONTROLLER = BIG BOSS (receive requests and decide what to do next)

import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto'; 

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getAllNinjas(): CreateNinjaDto[] {
    console.log(this.ninjasService.getAllNinjas())
    return this.ninjasService.getAllNinjas();
  }

  @Get(':id')
  getNinjaById(@Param("id") id: number): CreateNinjaDto {
    console.log(this.ninjasService.getNinjaById(id))
    return this.ninjasService.getNinjaById(id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto): CreateNinjaDto {
    console.log(this.ninjasService.createNinja(createNinjaDto))
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(
    @Param('id') id: number,
    @Body() createNinjaDto: CreateNinjaDto,
  ): CreateNinjaDto {
    console.log(this.ninjasService.updateNinja(id, createNinjaDto))
    return this.ninjasService.updateNinja(id, createNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: number): CreateNinjaDto {
    console.log(this.ninjasService.deleteNinja(id))
    return this.ninjasService.deleteNinja(id);
  }
}
