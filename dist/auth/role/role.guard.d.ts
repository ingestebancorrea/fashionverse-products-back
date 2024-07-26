import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
export declare class RoleGuard implements CanActivate {
    private jwtService;
    private reflector;
    constructor(jwtService: JwtService, reflector: Reflector);
    matchRoles(roles: string[], userRole: string): boolean;
    matchStates(activeRole: string): any;
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
