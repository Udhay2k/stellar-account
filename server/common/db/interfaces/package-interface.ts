import { BuildOptions, Model } from "sequelize";

export interface PackageAttributes {
    id?: number;
    name: string;
    type: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PackageModel extends Model<PackageAttributes>, PackageAttributes { }
export class Package extends Model<PackageModel, PackageAttributes> { }
export type PackageStatic = typeof Model & { new(values?: object, options?: BuildOptions): Package; };
