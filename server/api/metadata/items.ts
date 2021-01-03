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
                displayName: "Name",
                editable: true,
                generated: false,
                localizable: false,
                name: "name",
                nullable: true,
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
                displayName: "Type",
                editable: true,
                generated: false,
                localizable: false,
                name: "type",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "enum",
                enum: [
                    {
                        displayName: "Room",
                        value: "1"
                    },
                    {
                        displayName: "Advanced Room",
                        value: "2"
                    },
                    {
                        displayName: "Booth",
                        value: "3"
                    },
                    {
                        displayName: "Viwer Hours",
                        value: "4"
                    },
                    {
                        displayName: "Cloud Storage",
                        value: "5"
                    },
                    {
                        displayName: "Support Hour",
                        value: "6"
                    }
                ],
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Payment Cycle",
                editable: true,
                generated: false,
                localizable: false,
                name: "payment_cycle",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "enum",
                enum: [
                    {
                        displayName: "Monthly",
                        value: "1"
                    },
                    {
                        displayName: "One Time",
                        value: "2"
                    }
                ],
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Unit",
                editable: true,
                generated: false,
                localizable: false,
                name: "unit",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "enum",
                enum: [
                    {
                        displayName: "Room",
                        value: "1"
                    },
                    {
                        displayName: "Hour",
                        value: "2"
                    },
                    {
                        displayName: "GB",
                        value: "3"
                    },
                    {
                        displayName: "Session",
                        value: "4"
                    },
                    {
                        displayName: "Cloud Storage",
                        value: "5"
                    }

                ],
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            },
            {
                alias: "",
                parent: "",
                displayName: "Price",
                editable: true,
                generated: false,
                localizable: false,
                name: "price",
                nullable: true,
                orderable: true,
                readable: true,
                searchable: true,
                type: "number",
                unique: false,
                versionable: false,
                versioned: false,
                visible: true
            }
        ]
    };
}