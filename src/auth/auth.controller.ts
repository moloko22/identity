import { Body, Controller, UnauthorizedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthResultDto } from './dto/auth-result.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(@Body() loginInput: LoginDto): Promise<AuthResultDto | UnauthorizedException> {
        return this.authService.authenticate(loginInput)
    }
}
