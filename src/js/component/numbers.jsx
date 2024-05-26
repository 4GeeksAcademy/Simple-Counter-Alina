import React from "react";

const NumberDivs = (prop)=> {
    return(
        <div className="col-1 bg-secondary d-flex justify-content-center align-items-center border border-light-subtle border-5 rounded-4">{prop.id}</div>
    )
}

export default NumberDivs