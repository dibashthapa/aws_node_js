import express, { Request, Response } from "express";
import path from "path";
const server = express();

server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));
server.set("views", path.join(__dirname, "views"));

let response = { r: 0.2, g: 0.4, b: 0.8, rotationSpeed: 40 };
server.get("/", function (req: Request, res: Response) {
  res.json(response);
});

server.get("/form", function (req: Request, res: Response) {
  res.render("form.ejs");
});

server.post("/form", function (req: Request, res: Response) {
  Object.assign(response, req.body);
  return res.redirect("/");
});
server.listen(8080, function () {
  console.log("Server is listening at port 8080");
});
