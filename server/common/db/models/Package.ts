import { DataTypes, Sequelize } from 'sequelize';
import { PackageStatic } from '../interfaces';

export function PackageFactory(sequelize: Sequelize): PackageStatic {
    return <PackageStatic>sequelize.define("Package", {
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
        price: {
            type: DataTypes.DECIMAL,
        },
        type: {
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
    }, { tableName: 'package', version: true, paranoid: false, timestamps: true});
}