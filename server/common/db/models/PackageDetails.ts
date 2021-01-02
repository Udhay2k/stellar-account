import { DataTypes, Sequelize } from 'sequelize';
import { PackageDetailsStatic } from '../interfaces';

export function PackageDetailsFactory(sequelize: Sequelize): PackageDetailsStatic {
    return <PackageDetailsStatic>sequelize.define("PackageDetails", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        package_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.DECIMAL,
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
    }, { tableName: 'package_details', version: true, paranoid: false, timestamps: true}
    );
}