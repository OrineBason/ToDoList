import {create, update, get, deleteOne} from '../service/tasks/js'
import express from 'express';
const router = express.Router()

router.get("/", get);
router.post("/tasks", create);
router.put("/tasks", update);
router.delete("/tasks", deleteOne);

export default router;