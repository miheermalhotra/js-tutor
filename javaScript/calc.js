class Calculator {
    constructor() {
      this.currentValue = 0;
    }
  
    add(value) {
      this.currentValue += value;
      return this;
    }
  
    subtract(value) {
      this.currentValue -= value;
      return this;
    }
  
    multiply(value) {
      this.currentValue *= value;
      return this;
    }
  
    divide(value) {
      this.currentValue /= value;
      return this;
    }
  
    getValue() {
      return this.currentValue;
    }
  }
  
  const calc = new Calculator();
  const result = calc.add(5).multiply(2).subtract(3).divide(2).getValue();
  console.log(result); // should print 3.5
  