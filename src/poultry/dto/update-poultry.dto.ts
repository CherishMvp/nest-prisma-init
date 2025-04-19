import { PartialType } from '@nestjs/swagger';
import { CreatePoultryDto } from './create-poultry.dto';

export class UpdatePoultryDto extends PartialType(CreatePoultryDto) {}
