import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/user.repository';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    async findUserByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOneByEmail(email);
    }
}
