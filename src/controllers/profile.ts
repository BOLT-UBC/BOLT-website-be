
import { Request, Response } from "express";
import { supabase } from "../supabase";

export const getProfile = async (req: Request, res: Response) => {
    try {
        if (!req.oidc.user) {
            throw new Error("User not authenticated");
        }

        const userId = req.oidc.user.sub;

        console.log("User ID:", userId);

        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('auth0_user_id', userId)
            .single();

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        console.error("Error retrieving user profile:", error);
        res.status(500).json({ error: "Failed to retrieve user profile." });
    }
}