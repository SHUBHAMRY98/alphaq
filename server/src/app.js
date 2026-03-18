import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes.js";

import serviceRoutes from "./modules/service/service.routes.js";

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api/services", serviceRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

export default app;