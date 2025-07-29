import "./App.css";
import { useState } from "react";
import OperationText from "./Components/OperationText";
import OperationBtn from "./Components/OperationBtn";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operatorSymbol, setOperatorSymbol] = useState(null);
  const operators = ["+", "–", "*", "/"];

  const performOperation = (operator) => {
    let res;
    setOperatorSymbol(operator);

    if (num1 === "" || num2 === "") {
      res = "Please enter both numbers!";
      setResult(res);
      return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operator === "+") res = n1 + n2;
    else if (operator === "–") res = n1 - n2;
    else if (operator === "*") res = n1 * n2;
    else if (operator === "/") {
      res = n2 !== 0 ? n1 / n2 : "Can not be divided by 0";
    }

    typeof res === "number" ? setResult(Number(res.toFixed(5))) : setResult(res)
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
            onChange={(e) => setNum1(e.target.value)}
          />

          <p className="operator-symbol">{operatorSymbol}</p>

          <input
            className="field"
            type="number"
            value={num2}
            placeholder="Enter second number"
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <OperationText resultText={result} />
        <div className="buttons">
          {operators.map((e) => (
            <OperationBtn operator={e} handleClick={performOperation} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
