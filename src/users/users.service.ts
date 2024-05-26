import { Injectable } from '@nestjs/common';
import { User } from './entities/User.entity';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
          id: '1',
          email: 'joe@gmail.com',
          password: 'changeme',
          firstName: 'Joe',
          lastName: 'Doe',
        },
        {
          id: '2',
          email: 'maria@gmail.com',
          password: 'guess',
          firstName: 'Maria',
          lastName: 'Aloe',
        },
      ];
    
      async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
      }
}
