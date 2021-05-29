import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import TableCol from "./PadButton";

const TableRow = ({dataArr}) => {

    return(
        <div className="tableRow">
            {dataArr.map((data, index) => {
               const isLastBtn = index === dataArr.length - 1; // 마지막 열이면 true (오렌지색 버튼을 만드는 용도) 
               return <TableCol data = {data} isOrange = {isLastBtn} />
            })}
        </div>
    )
}

export default TableRow;