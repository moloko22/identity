import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const postgresConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
    username: 'postgres',
    entities: [],
    database: 'identity',
    synchronize: false,
    logging: true,
    autoLoadEntities: true,
}