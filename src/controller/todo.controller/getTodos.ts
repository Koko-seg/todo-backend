import { Request, Response } from "express";
import { todos } from "../db/todotypes";

export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};
