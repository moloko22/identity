import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const postgresConfig: TypeOrmModuleOptions = {
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
    autoLoadEntities: true,
}