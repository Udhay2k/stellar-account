import { BuildOptions, Model } from "sequelize";

export interface InvoiceAttributes {
    id?: number;
    issue_date: Date;
    total: number;
    sub_total: number;
    discount: number;
    stripe_payment_id: string;
    payment_date: Date;
    subscription_details_id: string;
    stellar_id: string;
    notes: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface InvoiceModel extends Model<InvoiceAttributes>, InvoiceAttributes { }
export class Invoice extends Model<InvoiceModel, InvoiceAttributes> { }
export type InvoiceStatic = typeof Model & { new(values?: object, options?: BuildOptions): Invoice; };
