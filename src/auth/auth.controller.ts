import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';


class AuthRequestDto {
    @ApiProperty({
      description: 'User email',
      default: 'user@gmail.com'
    })
    email: string

    @ApiProperty({
      description: 'User password'
    })
    password: string

    constructor(request: AuthRequestDto) {
        return new AuthRequestDto(request)
    }
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({  summary: 'Authorization for user' })
  @ApiResponse({ status: 200, description: 'OK'})
  @ApiResponse({ status: 400, description: 'BAD_REQUEST' })
  @ApiResponse({ status: 404, description: 'NOT_FOUND' })
  @ApiResponse({ status: 500, description: 'SERVER_ERROR' })
  signIn(@Body() loginBody: AuthRequestDto) {
    return this.authService.signIn(loginBody);
  }
}