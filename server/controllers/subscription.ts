import { Request, Response } from "express";
import * as P from "bluebird";

export async function metadata(req: Request, res: Response): P<any> {
    const greeting = "World";

    res.send({ "msg": "hello " + greeting });
}