import express from 'express';
import TournamentsController from './controller/TournamentsController';

const routes = express.Router();

const tournamentsController = new TournamentsController();

routes.get("/tournaments", tournamentsController.findAll)
routes.post("/tournaments", tournamentsController.create);

export default routes;