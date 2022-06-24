import express, { Express, Response, Request } from "express";
import "dotenv/config";
const PORT = process.env["port"];

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HEllO the api is working");
});

app.listen(PORT, () => {
  console.log(
    `[EXPRESS-SERVER]: The express server is listening on http://localhost:${PORT}`
  );
});
