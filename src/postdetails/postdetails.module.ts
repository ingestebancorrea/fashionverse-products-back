import { Module } from '@nestjs/common';
import { PostdetailsService } from './postdetails.service';
import { PostdetailsController } from './postdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postdetail } from './entities/postdetail.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Postdetail]),
    AuthModule
  ],
  controllers: [PostdetailsController],
  providers: [PostdetailsService],
  exports: [PostdetailsService]
})
export class PostdetailsModule {}
