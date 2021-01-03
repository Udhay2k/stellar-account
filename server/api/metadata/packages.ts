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
                        displayName: "One Time",
                        value: "1"
                    },
                    {
                        displayName: "Monthly",
                        value: "2"
                    },
                    {
                        displayName: "Annual",
                        value: "3"
                    },
                    {
                        displayName: "Custom",
                        value: "4"
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