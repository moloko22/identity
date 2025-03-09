import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsEmpty()
  firstName?: string;

  @IsString()
  @IsEmpty()
  lastName?: string;
}
