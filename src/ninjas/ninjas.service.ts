// CONTROLLER/SERVICE = SUPPLIER

import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  public ninjas: CreateNinjaDto[] = [
    {
      id: 1,
      name: 'Ninja 1',
      weapon: 'nunchucks',
    },
    {
      id: 2,
      name: 'Ninja 2',
      weapon: 'stars',
    },
    {
      id: 3,
      name: 'Ninja 3',
      weapon: 'nunchucks',
    },
  ];

  getAllNinjas(): CreateNinjaDto[] {
    console.log("GET all Ninjas");
    return this.ninjas;
  }

  getNinjaById(id: number): CreateNinjaDto {
    console.log(`Get ninja ${id}`);
    return this.ninjas.find(ninja => ninja.id === id);
  }

  createNinja(createNinjaDto: CreateNinjaDto): CreateNinjaDto {
    console.log(`Created a new ninja with an id of ${createNinjaDto.id}`)
    const newNinja: CreateNinjaDto = {
      ...createNinjaDto,
      id: this.ninjas.length + 1,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, createNinjaDto: CreateNinjaDto): CreateNinjaDto {
    console.log("Updated a ninja")
    const ninjaToUpdate = this.ninjas.find(ninja => ninja.id === id);
    if (ninjaToUpdate) {
      ninjaToUpdate.name = createNinjaDto.name;
      ninjaToUpdate.weapon = createNinjaDto.weapon;
    }
    return ninjaToUpdate;
  }

  deleteNinja(id: number): CreateNinjaDto {
    console.log("Delete a ninja")
    const index = this.ninjas.findIndex(ninja => ninja.id === id);
    if (index >= 0) {
      const deletedNinja = this.ninjas.splice(index, 1);
      return deletedNinja[0];
    }
    return null;
  }
}
