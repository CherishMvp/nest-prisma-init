import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
// import { PrismaService } from './prisma.service';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}
  @Get('products')
  findPublishedProducts() {
    return this.prismaService.product.findMany({
      where: { published: true },
    });
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.prismaService.product.create({ data: createProductDto });
  }

  @Get()
  findAll() {
    return this.prismaService.product.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prismaService.product.findUnique({
      where: { id: id },
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrismaDto: CreateProductDto) {
    return this.prismaService.product.update({
      where: { id: id },
      data: updatePrismaDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prismaService.product.delete;
  }
}
