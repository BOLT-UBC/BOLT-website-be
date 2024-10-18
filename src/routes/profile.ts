import { Router } from "express";

const profileRouter = Router();

import { getProfile } from "../controllers/profile";

profileRouter.get('/', getProfile);

export default profileRouter;