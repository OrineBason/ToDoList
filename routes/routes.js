//CR: The import should be "../services/tasks" no need for the extension
import { create, update, get, deleteOne } from "../service/tasks/js";
//CR: It's a convention to put package imports at the beggining of the file.
import express from "express";
//CR: Why didn't you import Router directly?
const router = express.Router();

//CR: This is clean looking :)
//CR: Why did you both write /tasks at server.js and here? The route is now /tasks/tasks
router.get("/", get);
router.post("/tasks", create);
router.put("/tasks", update);
router.delete("/tasks", deleteOne);

export default router;
