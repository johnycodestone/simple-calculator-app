import React from "react";

const OperationBtn = ({operator, handleClick}) => {
    return (
        <div className="operator-btn">
            <button onClick={()=>handleClick(operator)}>{operator}</button>
        </div>
    )
}

export default OperationBtn;