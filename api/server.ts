import express, { application, Express, Request, Response } from "express";
import path from "path";
import "dotenv/config";

const App = express();
const port = process.env["Port"];

App.use(express.static(path.join(__dirname, "/public")));

App.set("views", path.join(__dirname, "/web"));
App.set("view engine", "ejs");
App.engine("ejs", require("ejs-mate"));

App.get("/", (req: Request, res: Response) => {
  res.render("home");
});

App.listen(port, () => {
  console.log(
    `[EXPRESS-SERVER]: The app is listening at http://localhost:${port}}`
  );
});
