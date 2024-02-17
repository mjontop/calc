class CalculatorService {
  private result: number;
  private totalOps: number;
  private history: { result: number; totalOps: number }[];

  constructor() {
    this.result = 0;
    this.totalOps = 0;
    this.history = [];
  }

  init(operator: string, num1: number, num2: number): number {
    this.totalOps++;
    switch (operator) {
      case "add":
        this.result = num1 + num2;
        break;
      case "subtract":
        this.result = num1 - num2;
        break;
      case "multiply":
        this.result = num1 * num2;
        break;
      case "divide":
        this.result = num1 / num2;
        break;
      default:
        throw new Error("Invalid operator");
    }
    this.history.push({ result: this.result, totalOps: this.totalOps });
    return this.result;
  }

  operation(operator: string, num: number): number {
    this.totalOps++;
    switch (operator) {
      case "add":
        this.result += num;
        break;
      case "subtract":
        this.result -= num;
        break;
      case "multiply":
        this.result *= num;
        break;
      case "divide":
        this.result /= num;
        break;
      default:
        throw new Error("Invalid operator");
    }
    this.history.push({ result: this.result, totalOps: this.totalOps });
    return this.result;
  }

  undo(): number {
    if (this.history.length > 0) {
      this.history.pop();
      const prevState = this.history[this.history.length - 1];
      this.result = prevState.result;
      this.totalOps = prevState.totalOps;
      return this.result;
    } else {
      throw new Error("Cannot undo further " + JSON.stringify(this.history));
    }
  }

  reset(): void {
    this.result = 0;
    this.totalOps = 0;
    this.history = [];
  }

  getTotalOps(): number {
    return this.totalOps;
  }
}

export { CalculatorService };
