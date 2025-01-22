import { JwtModuleOptions } from "@nestjs/jwt";

export const JWT_SECRET = 'SUPER_SECRET';
export const JWT_CONFIG: JwtModuleOptions = {
    global: true,
    secret: JWT_SECRET,
    signOptions: { expiresIn: '30m' }
}