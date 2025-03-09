import { IsNotEmpty, IsString } from 'class-validator';

export class AuthResultDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
