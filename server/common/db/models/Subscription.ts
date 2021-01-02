import { DataTypes, Sequelize } from 'sequelize';
import { SubscriptionStatic } from '../interfaces';

export function SubscriptionFactory(sequelize: Sequelize): SubscriptionStatic {
    return <SubscriptionStatic>sequelize.define("Subscription", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        organization_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        organization_type: {
            type: DataTypes.STRING,
        },
        stripe_customer_id: {
            type: DataTypes.STRING,
        },
        stripe_source_id: {
            type: DataTypes.STRING,
        },
        start_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        end_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        auto_renew: {
            type: DataTypes.STRING
        },
        package_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stat_std_rooms: {
            type: DataTypes.STRING
        },
        stat_adv_rooms: {
            type: DataTypes.STRING
        },
        stat_booths: {
            type: DataTypes.STRING
        },
        stat_viewer_hrs: {
            type: DataTypes.STRING
        },
        stat_support_hrs: {
            type: DataTypes.STRING
        },
        stat_recording_gb: {
            type: DataTypes.STRING
        },
        stat_act_adv_rooms: {
            type: DataTypes.STRING,
        },
        stat_act_std_rooms: {
            type: DataTypes.STRING,
        },
        stat_act_booths: {
            type: DataTypes.STRING,
        },
        stat_rem_viwer_hrs: {
            type: DataTypes.STRING,
        },
        stat_rem_support_hrs: {
            type: DataTypes.STRING
        },
        stat_rem_recording_gb: {
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
    }, { tableName: 'subscription', version: true, paranoid: false, timestamps: true}
    );
}