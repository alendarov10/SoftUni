function operationsBetweenNumbers(n1, n2, operator) {
  let result;
  let evenOdd;

  switch (operator) {
    case "+":
      result = n1 + n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;
    case "-":
      result = n1 - n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;
    case "*":
      result = n1 * n2;
      if (result % 2 === 0) {
        evenOdd = "even";
      } else {
        evenOdd = "odd";
      }
      console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
      break;
    case "/":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = n1 / n2;
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
      }
      break;
    case "%":
      if (n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = n1 % n2;
        console.log(`${n1} ${operator} ${n2} = ${result}`);
      }
      break;
  }
}
operationsBetweenNumbers(10, 12, "+");
operationsBetweenNumbers(10, 1, "-");
operationsBetweenNumbers(7, 3, "*");