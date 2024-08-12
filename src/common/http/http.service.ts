import { REQUEST } from '@nestjs/core';
import { Inject, Injectable, InternalServerErrorException, Scope } from "@nestjs/common";
import { IExternalApi } from "./external-api.interface";
import { HttpService } from "@nestjs/axios";
import axios from "axios";
import { ErrorMessages } from "../enums/error-messages.enum";
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class HttpExternalService implements IExternalApi  {

    constructor(
        private readonly httpService: HttpService,
        @Inject(REQUEST) private readonly request: Request
    ) {}

    post(url: string, params: object, headers: object): object {
        throw new Error("Method not implemented.");
    }
    getWithQuery(url: string, params: object, headers: object): object {
        throw new Error("Method not implemented.");
    }
    patch(url: string, params: object, headers: object): object {
        throw new Error("Method not implemented.");
    }
    put(url: string, params: object, headers: object): object {
        throw new Error("Method not implemented.");
    }
   
    async getWithParams(url:string, params:object, token:string):Promise<string>{
        const config = {}
        config['headers'] = { Authorization: `${token}` };

        console.log();        
        try {
            return await axios.get<any>(url,config)
            .then((res) => {
                
                return res.data
            })
            .catch((e)=>{
                /* Crear servicio para registro de logs de errores de comunicación de servicios */
                console.log(e);
                
                return null;  
            });
        } catch (error) {
            throw new InternalServerErrorException(ErrorMessages.API_RESPONSE_EXCEPTION)        
        }
        
    }
} 