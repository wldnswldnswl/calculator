import { useContext, useEffect, useReducer, useState } from "react";
import TableRow from "./TableRow";
import {CalculatorStateContext} from "../contexts/CalculatorContext";

const Table = () => {
    return(
            <div className = "table btnTable">
                <TableRow dataArr = {["","","","AC"]} />
                <TableRow dataArr = {["7","8","9","×"]} />
                <TableRow dataArr = {["4","5","6","-"]} />
                <TableRow dataArr = {["1","2","3","+"]} />
                <TableRow dataArr = {["0","=","÷"]} />
            </div>
    )
}

export default Table;