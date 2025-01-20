import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { AuthResultDto } from './dto/auth-result.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async authenticate(loginInput: LoginDto): Promise<AuthResultDto | UnauthorizedException> {
        const user = await this.validateUser(loginInput);

        if (user) {
            return {
                accessToken: 'access-token',
                refreshToken: 'refresh-token'
            }
        }

        return new UnauthorizedException()
    }

    async validateUser(loginInput: LoginDto): Promise<any> {
        const { email: loginEmail, password: loginPassword } = loginInput;
        const user = await this.userService.findUserByEmail(loginEmail)
        console.log(user, 'here')
        if (user && user.password === loginPassword) {
            return user;
        }

        return null
    }
}
