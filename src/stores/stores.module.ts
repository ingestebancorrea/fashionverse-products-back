import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { HttpExternalService } from 'src/common/http/http.service';
import { StoresService } from './stores.service';

@Module({
  imports:[HttpModule ],
  providers: [StoresService,HttpExternalService,ConfigService],
  exports: [StoresService]
})
export class StoresModule {}
