import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'identity',
  synchronize: false,
  logging: false,
  entities: [`../${__dirname}/entity/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  subscribers: [],
});

export default AppDataSource;
