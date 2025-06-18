import express from "express";
import { getTodos, addTodo, getTodoById } from "../controller/todo.controller";

const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/", addTodo);

todoRouter.get("/:id", getTodoById);

export default todoRouter;
