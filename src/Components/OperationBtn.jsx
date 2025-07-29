import React from "react";
import "../styles/OperationBtn.css";

const OperationBtn = ({operator, handleClick}) => {
    return (
        <div className="operator-btn-cont">
            <button className="operator-btn" onClick={()=>handleClick(operator)}>{operator}</button>
        </div>
    )
}

export default OperationBtn;