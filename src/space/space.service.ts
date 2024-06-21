import { Injectable } from '@nestjs/common';
import { CreateSpaceDto } from './dto/create-space.dto';
import { UpdateSpaceDto } from './dto/update-space.dto';

@Injectable()
export class SpacesService {
  create(_createSpaceDto: CreateSpaceDto) {
    return 'This action adds a new space';
  }

  findAll() {
    return 'This action returns all spaces';
  }

  findOne(id: number) {
    return `This action returns a #${id} space`;
  }

  update(id: number, _updateSpaceDto: UpdateSpaceDto) {
    return `This action updates a #${id} space`;
  }

  remove(id: number) {
    return `This action removes a #${id} space`;
  }
}