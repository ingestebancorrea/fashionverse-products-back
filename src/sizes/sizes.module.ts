import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Size } from './entities/size.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Size]),
    AuthModule
  ],
  controllers: [SizesController],
  providers: [SizesService]
})
export class SizesModule {}
