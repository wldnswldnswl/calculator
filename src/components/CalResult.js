import { useContext, useEffect } from 'react';
import {CalculatorStateContext} from "../contexts/CalculatorContext";

const CalResult = () => {
    const state = useContext(CalculatorStateContext);
    
    useEffect(()=>{
        // console.log("expression: ",state.expression);
    },[state.expression])
    return (
        <div className = "resultInput">{state.displayNumber}</div>
    )
}

export default CalResult;