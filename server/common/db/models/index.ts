import * as sequelize from 'sequelize';
import { ItemFactory } from "./Item";
import { InvoiceFactory } from "./Invoice";
import { InvoiceDetailsFactory } from "./InvoiceDetails";
import { PackageFactory } from "./Package";
import { PackageDetailsFactory } from "./PackageDetails";
import { SubscriptionFactory } from "./Subscription";

export const dbConfig = new sequelize.Sequelize(
    process.env.SERVER_DB_USER,
    process.env.SERVER_DB_NAME,
    process.env.SERVER_DB_PASSWORD,
    {
        port: Number(process.env.SERVER_DB_PORT) || 54320,
        host: process.env.SERVER_DB_HOST || "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

dbConfig
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.log("Unable to connect to the database:", err);
    });

export const Item = ItemFactory(dbConfig);
export const Invoice = InvoiceFactory(dbConfig);
export const InvoiceDetails = InvoiceDetailsFactory(dbConfig);
export const Package = PackageFactory(dbConfig);
export const PackageDetails = PackageDetailsFactory(dbConfig);
export const Subscripton = SubscriptionFactory(dbConfig);
