import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
      private jwtService: JwtService,
      private usersService: UsersService
  ){}

  async signIn({email, password}: { email: string, password: string }): Promise<{ access_token: string }> {
      const user = await this.usersService.findOne(email);
      if (user?.password !== password) {
        throw new UnauthorizedException();
      }
      const { password: userPassword, ...result } = user;
      const userInfo = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
      const payload = { sub: userInfo };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
  }
}
