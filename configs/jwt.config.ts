import { JwtModuleOptions } from "@nestjs/jwt";

export const JWT_CONFIG: JwtModuleOptions = {
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRATION_TIME }
}