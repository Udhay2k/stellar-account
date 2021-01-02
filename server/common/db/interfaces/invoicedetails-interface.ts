import { BuildOptions, Model } from "sequelize";

export interface InvoiceDetailsAttributes {
    id?: number;
    item_id: string;
    quantity: number;
    unit_price: number;
    total: number;
    invoice_id: string;
    start_date: Date;
    expiry_date: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface InvoiceDetailsModel extends Model<InvoiceDetailsAttributes>, InvoiceDetailsAttributes { }
export class InvoiceDetails extends Model<InvoiceDetailsModel, InvoiceDetailsAttributes> { }
export type InvoiceDetailsStatic = typeof Model & { new(values?: object, options?: BuildOptions): InvoiceDetails; };
