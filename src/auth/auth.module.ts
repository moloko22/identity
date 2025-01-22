import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONFIG } from 'configs/jwt.config';

@Module({
  imports: [
    UsersModule,
    JwtModule.register(JWT_CONFIG),
  ],
  providers: [AuthService, AuthController],
  controllers: [AuthController]
})
export class AuthModule { }
