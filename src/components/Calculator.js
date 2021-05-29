import Table from "./Table";
import CalResult from "./CalResult";
import {CalculatorProvider} from "../contexts/CalculatorContext";

const Calculator = () => {
    return(
        <CalculatorProvider>
            <div className="table calculator">
                <CalResult />
                <Table />
            </div>
        </CalculatorProvider>
    )
}

export default Calculator;