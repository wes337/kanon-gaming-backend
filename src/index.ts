import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleHttpError } from "./errors";
import { getCountryByName, findCountries, getAllCountries } from "./functions";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get(
  "/country/all",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allCountries = await getAllCountries();
      res.send(allCountries);
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/country/name/:name",
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

app.get(
  "/country/search",
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

app.use(handleHttpError);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
