import { Inject, Injectable } from '@nestjs/common';
import { CreatePoultryDto } from './dto/create-poultry.dto';
import { UpdatePoultryDto } from './dto/update-poultry.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PoultryService {
  @Inject(PrismaService)
  private readonly prisma: PrismaService;

  create(createPoultryDto: CreatePoultryDto) {
    return 'This action adds a new poultry';
  }

  findAll() {
    return `This action returns all poultry`;
  }

  findOne(id: string) {
    // findUnique只能是id
    return this.prisma.poultry.findFirst({ where: { name: 'Chicken' } });
  }

  update(id: number, updatePoultryDto: UpdatePoultryDto) {
    return `This action updates a #${id} poultry`;
  }

  remove(id: number) {
    return `This action removes a #${id} poultry`;
  }
}
