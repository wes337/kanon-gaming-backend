import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import countryRouter from "./rest-countries";
import slotMachineRouter from "./slot-machine";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/country", countryRouter);
app.use("/slot-machine", slotMachineRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
