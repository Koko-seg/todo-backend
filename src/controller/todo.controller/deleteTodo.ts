import { Request, Response } from "express";

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.body;
};
