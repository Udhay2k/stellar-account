import { BuildOptions, Model } from "sequelize";

export interface PackageDetailsAttributes {
    id?: number;
    package_id: number;
    item_id: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PackageDetailsModel extends Model<PackageDetailsAttributes>, PackageDetailsAttributes { }
export class PackageDetails extends Model<PackageDetailsModel, PackageDetailsAttributes> { }
export type PackageDetailsStatic = typeof Model & { new(values?: object, options?: BuildOptions): PackageDetails; };
