import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

   // POST /ninjas
  @Post()
  create(@Body() createNinjaDto: CreateNinjaDto) {
    console.log("POST /ninjas");
    // Call the service to create a ninja using the provided DTO
    const createdNinja = this.ninjasService.create(createNinjaDto);
    return createdNinja;
  }

  // GET /ninjas
  @Get()
  findAll() {
    console.log("GET /ninjas");
    // Call the service to get all ninjas
    const ninjas = this.ninjasService.findAll();
    return ninjas;
  }

  // GET /ninjas/:id
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log("GET /ninjas/:id");
    // Call the service to get a specific ninja by ID
    const ninja = this.ninjasService.findOne(id);
    return ninja;
  }

  // PATCH /ninjas/:id
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
    console.log("PATCH /ninjas/:id");
    // Call the service to update a specific ninja by ID using the provided DTO
    const updatedNinja = this.ninjasService.update(id, updateNinjaDto);
    return updatedNinja;
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log("DELETE /ninjas/:id");
    // Call the service to delete a specific ninja by ID
    const deletedNinja = this.ninjasService.remove(id);
    return deletedNinja;
  }
}
