import { Request, Response, NextFunction } from 'express';
import { ErrorResponseBuilder, HttpStatus } from '../api/services';

export const create = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};

export const metadata = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};

export const update = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};

export const search = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};

export const summary = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};

export const get = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};


export const list = function (req: Request, res: Response, next: NextFunction) {
    try {
        res.json([]);
    } catch (e) {
        res.send(e);
    }
};