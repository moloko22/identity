import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/user.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async findUserByEmail(email: string): Promise<UserDto | null> {
        return await this.userRepository.findOneByEmail(email);
    }
}
