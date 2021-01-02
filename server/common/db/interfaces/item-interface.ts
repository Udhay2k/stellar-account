import { BuildOptions, Model } from "sequelize";

export interface ItemAttributes {
    id?: number;
    name: string;
    type: string;
    unit?: string;
    price?: number;
    payment_cycle?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ItemModel extends Model<ItemAttributes>, ItemAttributes { }
export class Item extends Model<ItemModel, ItemAttributes> { }
export type ItemStatic = typeof Model & { new(values?: object, options?: BuildOptions): Item; };
