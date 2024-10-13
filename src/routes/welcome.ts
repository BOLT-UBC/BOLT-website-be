import { Router } from "express";
import { getWelcomeMessage } from "../controllers/welcome";

const router = Router();

router.get('/welcome', getWelcomeMessage);

export default router;