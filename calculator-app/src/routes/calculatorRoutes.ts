import express, { Request, Response } from "express";
import CalculatorController from "../controllers/calculatorController";

const router = express.Router();
const calculatorController = new CalculatorController();

router.post("/init", (req: Request, res: Response) => {
  calculatorController.init(req, res);
});

router.post("/operation", (req: Request, res: Response) => {
  calculatorController.operation(req, res);
});

router.put("/undo", (req: Request, res: Response) => {
  calculatorController.undo(req, res);
});

router.get("/reset", (req: Request, res: Response) => {
  calculatorController.reset(req, res);
});

export default router;
