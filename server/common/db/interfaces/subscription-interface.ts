import { BuildOptions, Model } from "sequelize";

export interface SubscriptionAttributes {
    id?: number;
    name: string;
    user_id: string;
    organization_id: string;
    organization_type: string;
    stripe_customer_id: string;
    stripe_source_id: string;
    auto_renew: string;
    start_date: Date;
    end_date: Date;
    package_id: string;
    stat_std_rooms: string;
    stat_adv_rooms: string;
    stat_booths: string;
    stat_viewer_hrs: string;
    stat_support_hrs: string;
    stat_recording_gb: string;
    stat_act_std_rooms: string;
    stat_act_adv_rooms: number;
    stat_act_booths: string;
    stat_rem_viwer_hrs: string;
    stat_rem_support_hrs: number;
    stat_rem_recording_gb: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface SubscriptionModel extends Model<SubscriptionAttributes>, SubscriptionAttributes { }
export class Subscription extends Model<SubscriptionModel, SubscriptionAttributes> { }
export type SubscriptionStatic = typeof Model & { new(values?: object, options?: BuildOptions): Subscription; };
