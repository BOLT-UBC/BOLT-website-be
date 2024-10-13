import express from "express";
import welcomeRoutes from "./routes/welcome";

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to server URL.");
})

app.get('/welcome', welcomeRoutes);

export default app;