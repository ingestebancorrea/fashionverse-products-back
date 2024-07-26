import { ConfigService } from '@nestjs/config';
import { HttpExternalService } from 'src/common/http/http.service';
export declare class UsersService {
    private readonly httpExternalService;
    private readonly configService;
    constructor(httpExternalService: HttpExternalService, configService: ConfigService);
    findUserByUuid(uuid: string): Promise<any>;
    extractIdUserOfToken(token: string): Promise<string>;
}
