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
                displayName: "Item Id",
                editable: true,
                generated: false,
                localizable: false,
                name: "item_id",
                nullable: false,
                orderable: true,
                readable: true,
                searchable: true,
                type: "reference",
                reference: {
                    kind: "single",
                    to: "item",
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
                displayName: "Quantity",
                editable: true,
                generated: false,
                localizable: false,
                name: "quantity",
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