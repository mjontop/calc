import { Request, Response } from "express";
import { CalculatorService } from "../services/calculatorService";

class CalculatorController {
  private calculatorService: CalculatorService;

  constructor() {
    this.calculatorService = new CalculatorService();
  }

  init(req: Request, res: Response): void {
    try {
      const { operator, num1, num2 } = req.body;
      const result = this.calculatorService.init(operator, num1, num2);
      res.status(200).json({
        result: result,
        totalOps: this.calculatorService.getTotalOps(),
        Id: 123, // Example Id, you may generate or use an appropriate Id
      });
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  }

  operation(req: Request, res: Response): void {
    try {
      const { operator, num } = req.body;
      const result = this.calculatorService.operation(operator, num);
      res.status(200).json({
        result: result,
        totalOps: this.calculatorService.getTotalOps(),
      });
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  }

  undo(req: Request, res: Response): void {
    try {
      this.calculatorService.undo();
      res.status(200).json({
        result: this.calculatorService.getTotalOps(),
      });
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  }

  reset(req: Request, res: Response): void {
    try {
      this.calculatorService.reset();
      res.status(200).json({
        success: true,
        message: `Calculator is now reset`,
      });
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  }
}

export default CalculatorController;
