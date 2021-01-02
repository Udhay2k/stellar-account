import { DataTypes, Sequelize } from 'sequelize';
import { InvoiceStatic } from '../interfaces';

export function InvoiceFactory(sequelize: Sequelize): InvoiceStatic {
    return <InvoiceStatic>sequelize.define("Invoice", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        issue_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        payment_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        sub_total: {
            type: DataTypes.DECIMAL,
        },
        total: {
            type: DataTypes.DECIMAL,
        },
        discount: {
            type: DataTypes.DECIMAL,
        },
        stellar_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        stripe_payment_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        subscription_details_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        notes: {
            type: DataTypes.TEXT,
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
    }, { tableName: 'invoice', version: true, paranoid: false, timestamps: true }
    );
}