import express, { Request, Response } from "express";
const server = express();

server.get("/", function (req: Request, res: Response) {
  res.json({
    r: 0.2,
    g: 0.4,
    b: 0.8,
    rotationSpeed: 40,
  });
});

server.listen(8080, function () {
  console.log("Server is listening at port 8080");
});
