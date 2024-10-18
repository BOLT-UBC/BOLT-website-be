import { Router } from "express";

const profileRouter = Router();

import { getProfile, deleteProfile } from "../controllers/profile";

profileRouter.get('/', getProfile);
profileRouter.delete('/', deleteProfile);

export default profileRouter;