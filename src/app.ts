import express from "express";
import dotenv from "dotenv";
import { auth, requiresAuth } from "express-openid-connect";

import welcomeRoutes from "./routes/welcome";
import profileRouter from "./routes/profile";

dotenv.config();

const app = express();

// Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.AUTH0_BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.use('/welcome', welcomeRoutes);
app.use('/profile', requiresAuth(), profileRouter);

export default app;