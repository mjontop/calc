const { CalculatorService } = require("../src/services/calculatorService");

describe("CalculatorService", () => {
  let calculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  describe("init", () => {
    it("should initialize calculator with addition", () => {
      const result = calculatorService.init("add", 3, 4);
      expect(result).toBe(7);
    });

    it("should initialize calculator with subtraction", () => {
      const result = calculatorService.init("subtract", 10, 4);
      expect(result).toBe(6);
    });

    it("should initialize calculator with multiplication", () => {
      const result = calculatorService.init("multiply", 5, 3);
      expect(result).toBe(15);
    });

    it("should initialize calculator with division", () => {
      const result = calculatorService.init("divide", 15, 3);
      expect(result).toBe(5);
    });
  });

  describe("operation", () => {
    it("should perform addition operation", () => {
      calculatorService.init("add", 3, 4);
      const result = calculatorService.operation("add", 2);
      expect(result).toBe(9);
    });

    it("should perform subtraction operation", () => {
      calculatorService.init("subtract", 10, 4);
      const result = calculatorService.operation("subtract", 2);
      expect(result).toBe(4);
    });

    it("should perform multiplication operation", () => {
      calculatorService.init("multiply", 5, 3);
      const result = calculatorService.operation("multiply", 2);
      expect(result).toBe(30);
    });

    it("should perform division operation", () => {
      calculatorService.init("divide", 15, 3);
      const result = calculatorService.operation("divide", 2);
      expect(result).toBe(2.5);
    });
  });

  describe("undo", () => {
    it("should undo the last operation", () => {
      calculatorService.init("add", 3, 4);
      calculatorService.operation("add", 2);
      calculatorService.undo();
      expect(calculatorService.getTotalOps()).toBe(1);
    });

    it("should undo multiple operations", () => {
      calculatorService.init("add", 3, 4);
      calculatorService.operation("add", 2);
      calculatorService.operation("add", 5);
      calculatorService.undo();
      calculatorService.undo();
      expect(calculatorService.getTotalOps()).toBe(1);
    });

    it("should not allow undo when no operation performed", () => {
      calculatorService.init("add", 3, 4);
      calculatorService.undo();
      expect(calculatorService.getTotalOps()).toBe(1);
    });
  });

  describe("reset", () => {
    it("should reset the calculator", () => {
      calculatorService.init("add", 3, 4);
      calculatorService.reset();
      expect(calculatorService.getTotalOps()).toBe(0);
    });
  });

  describe("getTotalOps", () => {
    it("should return total number of operations", () => {
      calculatorService.init("add", 3, 4);
      calculatorService.operation("add", 2);
      expect(calculatorService.getTotalOps()).toBe(2);
    });
  });
});
