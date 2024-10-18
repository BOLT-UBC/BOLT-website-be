import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase URL or key is missing");
    process.exit(1);
}

export const supabase = createClient(supabaseUrl as string, supabaseKey as string)
