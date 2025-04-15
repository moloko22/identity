import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { AuthResultDto } from './dto/auth-result.dto';
import { User } from 'src/users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenData } from './dto/jwt-token-data.dto';
import { JwtTokenType } from './enums/jwt-token-type.enum';
import { JWT_CONFIG } from 'configs/jwt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(
    loginInput: LoginDto,
  ): Promise<AuthResultDto | UnauthorizedException> {
    const user = await this.validateUser(loginInput);

    if (user) {
      return this.signIn(user);
    }

    return new UnauthorizedException();
  }

  async validateUser(loginInput: LoginDto): Promise<User | null> {
    const { email: loginEmail, password: loginPassword } = loginInput;
    const user = await this.userService.findUserByEmail(loginEmail);

    if (user && user.password === loginPassword) {
      return user;
    }

    return null;
  }

  generateToken = async (
    tokenData: JwtTokenData,
    type: JwtTokenType = JwtTokenType.ACCESS,
  ): Promise<string> => {
    const refreshTokenOptions = {
      secret: JWT_CONFIG.secret,
      expiresIn: '7d',
    };

    const token =
      type === JwtTokenType.ACCESS
        ? await this.jwtService.signAsync(tokenData)
        : await this.jwtService.signAsync(tokenData, refreshTokenOptions);

    return token;
  };

  async signIn(tokenData: User): Promise<AuthResultDto> {
    const { id, firstName, lastName, email } = tokenData;

    const tokenPayload = {
      sub: id,
      firstName,
      lastName,
      email,
    };

    const accessToken = await this.generateToken(tokenPayload);
    const refreshToken = await this.generateToken(
      tokenPayload,
      JwtTokenType.REFRESH,
    );

    return {
      accessToken,
      refreshToken,
    };
  }
}
