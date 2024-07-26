import { IExternalApi } from "./external-api.interface";
import { HttpService } from "@nestjs/axios";
import { Request } from 'express';
export declare class HttpExternalService implements IExternalApi {
    private readonly httpService;
    private readonly request;
    constructor(httpService: HttpService, request: Request);
    post(url: string, params: object, headers: object): object;
    getWithQuery(url: string, params: object, headers: object): object;
    patch(url: string, params: object, headers: object): object;
    put(url: string, params: object, headers: object): object;
    getWithParams(url: string, params: object, headers?: object): Promise<string>;
}
