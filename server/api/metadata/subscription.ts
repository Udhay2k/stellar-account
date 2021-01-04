export const metadata = function () {
    return {
        creatable: true,
        defaultCount: 10,
        defaultOrder: [],
        deletable: true,
        editable: true,
        pagination: true,
        fields: [
            {
                alias: "",
                parent: "",
                displayName: "ID",
                editable: false,
                generated: true,
                localizable: false,
                name: "id",
                nullable: false,
                orderable: false,
                readable: true,
                searchable: false,
                type: "id",
                unique: true,
                versionable: false,
                versioned: false,
                visible: false
            },
            {
                alias: "",
                parent: "",
                displayName: "user Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "user_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Package Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "package_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "reference",
                reference: {
                    kind: "single",
                    to: "package",
                    api: "list"
                },
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Organization Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "organization_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Organization Type",
                editable: true,
                generated: false,
                localizable: false,
                name: "organization_type",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stripe Customer Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "stripe_customer_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stripe Source Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "stripe_source_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Start Date",
                editable: true,
                generated: false,
                localizable: false,
                name: "start_date",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "datetime",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "End Date",
                editable: true,
                generated: false,
                localizable: false,
                name: "end_date",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "datetime",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Auto renew",
                editable: true,
                generated: false,
                localizable: false,
                name: "auto_renew",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "Boolean",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Std Rooms",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_std_rooms",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Adv Rooms",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_adv_rooms",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Booths",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_booths",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Viewer Hrs",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_viewer_hrs",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Support Hrs",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_support_hrs",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Recording GB",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_recording_gb",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Act Adv Rooms",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_act_adv_rooms",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Act Std Rooms",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_act_std_rooms",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Act Booths",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_act_booths",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Rem Viwer Hrs",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_rem_viwer_hrs",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Rem Support Hrs",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_rem_support_hrs",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Stat Rem Recording GB",
                editable: true,
                generated: false,
                localizable: false,
                name: "stat_rem_recording_gb",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "string",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            }
        ]
    };
}