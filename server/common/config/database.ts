import { Sequelize } from "sequelize";

export const database = new Sequelize(process.env.SERVER_DB_NAME,
    process.env.SERVER_DB_USER,
    process.env.SERVER_DB_PASSWORD,
    {
        host: process.env.SERVER_DB_HOST,
        port: parseInt(process.env.SERVER_DB_PORT),
        dialect: 'postgres',
    }
);