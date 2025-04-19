import { Module } from '@nestjs/common';
import { PoultryService } from './poultry.service';
import { PoultryController } from './poultry.controller';

@Module({
  controllers: [PoultryController],
  providers: [PoultryService],
})
export class PoultryModule {}
