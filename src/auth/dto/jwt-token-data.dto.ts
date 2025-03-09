import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class JwtTokenData {
  @IsString()
  @IsNotEmpty()
  sub: string;

  @IsString()
  @IsEmpty()
  firstName?: string;

  @IsString()
  @IsEmpty()
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
