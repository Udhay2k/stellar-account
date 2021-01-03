import * as empty from "is-empty";
import * as _ from "underscore";

export const isEmpty = (value: string): boolean => {
    let returnValue = false;

    if (!empty(value)) {
        returnValue = true;
    }

    return returnValue;
};

export const isEmptyObject = (obj: any): boolean => {
    if (obj == null) return true;
    if (_.isDate(obj)) return obj == null;
    if (_.isBoolean(obj)) return obj == null;
    if (_.isNumber(obj)) return obj == null && obj == '';
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;

    return true;
};