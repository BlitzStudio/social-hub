import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();

const PORT = process.env["port"];
console.log(process.env["port"]);

app.get("/", (req: Request, res: Response) => {
  res.send("HEllO the api is working");
});

app.listen(PORT, () => {
  console.log(
    `[SERVER]: The express server is listening on http://localhost:5000`
  );
});
