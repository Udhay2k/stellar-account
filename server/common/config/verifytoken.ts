import * as jwt from "jsonwebtoken";
import * as validate from './validate';

/**
 * Setup JWT configuration
 */
export const verifyToken = async (req: any, obj, token, next): Promise<any> => {
    var err = new Error('Access denied!');
    err['statusCode'] = 403;
    let jwtPayload = {};

    if (!validate.isEmpty(token)) {
        next(err);
        return;
    }

    try {
        jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET);

        if (jwtPayload) {
            next();
        } else {
            next(err);
        }

    } catch (e) {
        next(err);
    }
};