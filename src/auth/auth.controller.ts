import { Body, Controller, UnauthorizedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthResultDto } from './dto/auth-result.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Get access token' })
  @ApiBody({
    type: LoginDto,
    description: 'Email and password of the user',
    examples: {
      correct: {
        value: {
          email: 'useremail@gmail.com',
          password: 'superpuperpassword',
        },
      },
    },
  })
  @Post('login')
  login(
    @Body() loginInput: LoginDto,
  ): Promise<AuthResultDto | UnauthorizedException> {
    return this.authService.authenticate(loginInput);
  }
}
