import { Entity } from 'typeorm';

@Entity()
export class User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email: string;
}
