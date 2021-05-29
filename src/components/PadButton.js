import { useContext, useEffect, useState } from "react";
import { CalculatorDispatchContext, CalculatorStateContext } from "../contexts/CalculatorContext";

const PadButton = ({data, isOrange}) => {
    const [isWide, handleWide] = useState(false);
    const dispatch = useContext(CalculatorDispatchContext);
    const state = useContext(CalculatorStateContext);
    const[pad, setPad] = useState(data);

    // 최초로 버튼을 렌더링 할 때, 넓은 패드로 사용할 버튼은 상태값 변경
    useEffect(()=>{
        if(data == "0")
            handleWide(true); // isWide = true
    },[]);

    useEffect(()=>{
        if(data == "AC" || data == "C")
            setPad(state.initPad);
    },[state.initPad]);

    // 패드 클릭 시 패드 값에 따라 action 분기
    const onClick = (e) =>{

        //console.log(data);
        switch(pad){
            case "=":
            case "+":
            case "-":
                // console.log("=")
                calculate();
                break;
            case "C": // 계산식과 값을 모두 초기화
                // console.log("c")
                init();
                break;
            case "AC": // 아무런 액션을 취하지 않음
                break;
            default: // 숫자
                // console.log("number");
                // toggleStatusPad();//숫자가 입력 되었으므로 C패드 AC로 바꾸기
                makeExpression();
                break;
        }
    }

    const calculate = () =>{
        console.log("Cal");
        dispatch({
            type:"GET_RESULT",
            value:pad
        })

    }

    const init = () => {
        dispatch({
            type:"INIT"
        })
    }

    const makeExpression = () => {
        dispatch({
            type:"MAKE_EXPRESSION",
            value: transferOperator(pad)
        })
    }

    /* eval 함수에서 인식하지 못하는 ÷,× 기호를 변환 */
    const transferOperator  = (value) => {
        if(value === "÷")
            return "/"
        else if(value === "×")
            return "*"
        else
          return value;
      }

    return(
        <div className = {'tableCol ' +(isOrange?'orange':'') +(isWide? 'wide': '')} onClick = {onClick}>{pad}</div>
    )
}



PadButton.defaultProps = {
    isWide : false
}

export default PadButton;