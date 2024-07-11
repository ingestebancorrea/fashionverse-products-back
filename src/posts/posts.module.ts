import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/users/users.module';
import { PosttypesModule } from 'src/posttypes/posttypes.module';
import { PostdetailsModule } from 'src/postdetails/postdetails.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    AuthModule,
    UserModule,
    PosttypesModule,
    PostdetailsModule,
    CommentsModule
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
