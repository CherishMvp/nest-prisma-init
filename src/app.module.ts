import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyPrismaModule } from './prisma/prisma.module';
import { PrismaModule } from 'nestjs-prisma';
import { PoultryModule } from './poultry/poultry.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    MyPrismaModule,
    PoultryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
