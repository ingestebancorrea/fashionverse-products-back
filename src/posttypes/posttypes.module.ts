import { Module } from '@nestjs/common';
import { PosttypesService } from './posttypes.service';
import { PosttypesController } from './posttypes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posttype } from './entities/posttype.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posttype]),
    AuthModule
  ],
  controllers: [PosttypesController],
  providers: [PosttypesService],
  exports: [PosttypesService]
})
export class PosttypesModule {}
