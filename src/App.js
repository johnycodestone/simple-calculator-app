import "./App.css";
import { useState } from "react";
import OperationText from "./Components/OperationText";
import OperationBtn from "./Components/OperationBtn";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);
  const [operatorSymbol, setOperatorSymbol] = useState("+");

  const performOperation = (operator) => {
    let res;
    setOperatorSymbol(operator);

    if (operator === "+") res = num1 + num2;
    else if (operator === "–") res = num1 - num2;
    else if (operator === "*") res = num1 * num2;
    else if (operator === "/")
      res = num2 !== 0 ? num1 / num2 : "Can not be divided by 0";

    setResult(res);
  };

  return (
    <div id="container">
      <div className="heading">
        <h1>Simple Calculator App</h1>
      </div>

      <div id="calculator">
        <div id="input-fields">
          <input
            className="field"
            type="number"
            value={num1}
            placeholder="Enter first number"
            onChange={(e) => setNum1(Number(e.target.value))}
          />

          <p className="operator-symbol">{operatorSymbol}</p>

          <input
            className="field"
            type="number"
            value={num2}
            placeholder="Enter second number"
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>

        <OperationText resultText={result} />

        <div className="buttons">
          <OperationBtn operator="+" handleClick={performOperation} />
          <OperationBtn operator="–" handleClick={performOperation} />
          <OperationBtn operator="*" handleClick={performOperation} />
          <OperationBtn operator="/" handleClick={performOperation} />
        </div>
      </div>
    </div>
  );
}

export default App;
