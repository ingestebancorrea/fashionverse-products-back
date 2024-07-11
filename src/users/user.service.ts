import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { HttpExternalService } from 'src/common/http/http.service';

@Injectable()
export class UsersService {

    constructor(
        private readonly httpExternalService: HttpExternalService,
        private readonly configService: ConfigService
    ) { }

    async findUserByUuid(uuid: string): Promise<any> {
        return await this.httpExternalService.getWithParams(`${this.configService.get('AUTH_SERVICE')}/users/${uuid}`, {})
    }

    async extractIdUserOfToken(token: string) {
        const jwtService = new JwtService();
        type Payload = {
            uuid: string
        }

        const data = jwtService.decode(token);
        const { uuid } = data && data as Payload;

        return uuid;
    }

}