import { DataTypes, Sequelize } from 'sequelize';
import { ItemStatic } from '../interfaces';

export function ItemFactory(sequelize: Sequelize): ItemStatic {
    return <ItemStatic>sequelize.define("Item", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        type: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL,
        },
        payment_cycle: {
            type: DataTypes.STRING,
        },
        unit: {
            type: DataTypes.STRING,
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
    }, { tableName: 'items', version: true, paranoid: false, timestamps: true});
}