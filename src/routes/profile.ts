import { Router } from "express";

const profileRouter = Router();

profileRouter.get('/', (req, res) => {
    res.json(req.oidc.user);
})

export default profileRouter;