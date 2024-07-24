import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExternalService } from 'src/common/http/http.service';

@Injectable()
export class StoresService {

    constructor(
        private readonly httpExternalService: HttpExternalService,
        private readonly configService: ConfigService
    ) { }

    async findStoreByUuid(): Promise<any> {
        return await this.httpExternalService.getWithParams(`${this.configService.get('AUTH_SERVICE')}/stores/by/user`, {})
    }

}