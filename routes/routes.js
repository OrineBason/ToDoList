import express from 'express';
import {createTask, getTask, updateTask, deleteOneTask} from '../service/Tasks.service.js'
const router = express.Router()

router.get("/", getTask);
router.post("/tasks", createTask);
router.put("/tasks", updateTask);
router.delete("/tasks", deleteOneTask);

export default router;