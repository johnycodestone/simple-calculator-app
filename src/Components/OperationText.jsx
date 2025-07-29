import React from "react";
import "../styles/OperationText.css";

const OperationText = ({resultText}) => {
    return (
        <div className="operation-text">
            <p className="text">Result: {resultText}</p>
        </div>
    )
}

export default OperationText;