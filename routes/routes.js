import express from 'express';
import {createTask, getTasks, updateTask, deleteOneTask} from '../service/Tasks.service.js'
const router = express.Router()

router.get("/", getTasks);
router.post("/tasks", createTask);
router.put("/tasks", updateTask);
router.delete("/tasks", deleteOneTask);

export {router};