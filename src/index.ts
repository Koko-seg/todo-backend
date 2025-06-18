import { Request, Response } from "express";
import express from "express";
import todoRouter from "./router/todos.router";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("ok");
});

app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
