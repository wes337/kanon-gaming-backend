import express, { Request, Response } from "express";
import { spin } from "./functions";

const slotMachineRouter = express.Router();

slotMachineRouter.get("/spin", (req: Request, res: Response) => {
  const result = spin();
  res.send(result);
});

export default slotMachineRouter;
