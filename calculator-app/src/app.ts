import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes";

const app = express();

app.use(express.json());

app.use("/api/calculator", calculatorRoutes);

export default app;
