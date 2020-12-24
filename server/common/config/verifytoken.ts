const jwt = require("jsonwebtoken");

const verify = (token: string): Promise<any> => {
    return new Promise(function (resolve, reject) {
        jwt.verify(token, process.env.JWT_SECRET)
            .then(data => {
                resolve(data);
            }).catch(error => {
                reject(error);
            });
    });
};

/**
 * Setup JWT configuration
 */
export const verifyToken = async (req: any, obj, token, next): Promise<any> => {
    var err = new Error('Access denied!');
    err['statusCode'] = 403;

    try {
        const data = verify(token);

        if (data) {
            next();
        } else {
            next(err);
        }
    }
    catch (e) {
        next(err);
    }
};
