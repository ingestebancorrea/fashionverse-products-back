import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpExternalService } from './http.service';

@Module({
    imports: [HttpModule],
    providers:[HttpExternalService]
})
export class HttpExternalApiModule {}