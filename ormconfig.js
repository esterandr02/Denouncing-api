module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'gostack',
    database: 'denouncing_api',
    entities: ['src/entities/*.ts'],
    migrations: ['src/entities/typeorm/migrations/*.ts'],
    synchronize: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/entities/typeorm/migrations',
    },
};
