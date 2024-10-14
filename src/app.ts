import express from "express";
import { createClient } from "@supabase/supabase-js";
import welcomeRoutes from "./routes/welcome";

const app = express();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl as string, supabaseKey as string)

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.get('/welcome', welcomeRoutes);

export default app;