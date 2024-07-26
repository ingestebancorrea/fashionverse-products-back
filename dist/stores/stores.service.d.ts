import { ConfigService } from '@nestjs/config';
import { HttpExternalService } from 'src/common/http/http.service';
export declare class StoresService {
    private readonly httpExternalService;
    private readonly configService;
    constructor(httpExternalService: HttpExternalService, configService: ConfigService);
    findStoreByUuid(): Promise<any>;
}
