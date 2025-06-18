import { Request, Response } from "express";
import { todos } from "../db/todotypes";

export const getTodoById = (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    res.json({ success: false, message: "not found todo" });
  }

  res.json({ todo });
};
