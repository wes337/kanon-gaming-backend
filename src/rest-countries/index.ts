import express, { NextFunction, Request, Response } from "express";
import { handleHttpError } from "./errors";
import { getCountryByName, findCountries, getAllCountries } from "./functions";

const countryRouter = express.Router();

countryRouter.get(
  "/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allCountries = await getAllCountries();
      res.send(allCountries);
    } catch (error) {
      next(error);
    }
  }
);

countryRouter.get(
  "/name/:name",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.params;
      const country = await getCountryByName(name);
      res.send(country);
    } catch (error) {
      next(error);
    }
  }
);

countryRouter.get(
  "/search",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { q } = req.query;

      if (!q) {
        res.status(400).send();
        return;
      }

      const queries = Array.isArray(q) ? q : [q];
      const results = await findCountries(queries as string[]);
      res.send(results);
    } catch (error) {
      next(error);
    }
  }
);

countryRouter.use(handleHttpError);

export default countryRouter;
