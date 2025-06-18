import { Request, Response } from "express";

import { nanoid } from "nanoid";
import { todos } from "../db/todotypes";

export const addTodo = (req: Request, res: Response) => {
  const { desc } = req.body;
  const uniqueId = nanoid();
  const todo = {
    id: uniqueId,
    desc: "",
    isComplete: false,
  };

  todos.push(todo);

  res.json({ success: true, todos });
};
