import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpExternalService } from 'src/common/http/http.service';
import { UsersService } from './user.service';

@Module({
  imports:[HttpModule ],
  providers: [UsersService,HttpExternalService,ConfigService],
  exports: [UsersService]
})
export class UserModule {}
