import { DataTypes, Sequelize } from 'sequelize';
import { InvoiceDetailsStatic } from '../interfaces';

export function InvoiceDetailsFactory (sequelize: Sequelize): InvoiceDetailsStatic {
    return <InvoiceDetailsStatic>sequelize.define("InvoiceDetails", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        item_id: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.DATE
        },
        expiry_date: {
            type: DataTypes.DATE
        },
        quantity: {
            type: DataTypes.DECIMAL,
        },
        unit_price: {
            type: DataTypes.DECIMAL,
        },
        total: {
            type: DataTypes.DECIMAL,
        },
        invoice_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, { tableName: 'invoice_details', version: true, paranoid: false, timestamps: true});
}