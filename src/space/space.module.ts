import { Module } from '@nestjs/common';
import { SpacesService } from './space.service';
import { SpacesController } from './space.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Space } from './entities/space.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Space])
  ],
  controllers: [SpacesController],
  providers: [SpacesService],
})
export class SpacesModule {}
