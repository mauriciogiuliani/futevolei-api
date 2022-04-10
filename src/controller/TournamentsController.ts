import db from "../database/connection";
import { Request, Response } from 'express'

export default class TournamentsController {

    async create(request: Request, response: Response) {
        const {
            name,
            date
        } = request.body;


        const dbTransaction = await db.transaction();

        try {
            await dbTransaction("tournaments").insert({
                name,
                date
            });

            await dbTransaction.commit();

            return response.status(201).send();
        } catch (err) {
            dbTransaction.rollback();

            return response.status(400).json({
                error: err
            });
        }

    }

    async findAll(request: Request, response: Response) {
        const tournaments = await db("tournaments").select("*");
        return response.json(tournaments);
    }
}