import { Request, Response } from "express";

export const getWelcomeMessage = async (req: Request, res: Response) => {
    try {
        res.send('<h1>Welcome!</h1>');
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}