import { createContext, useReducer } from 'react';
import {returnSyntaxError} from "../modules/error";

const initialState = {
  initPad:"AC",
  expression:"",
  displayNumber: 0
}

const reducer = (state,action) => {
  switch(action.type){
    case "MAKE_EXPRESSION": //  *, /, 숫자
      var resultForExpression;
      resultForExpression = state.expression === undefined ? "": state.expression;
      var isError = isOperator(action.value) && isOperator(resultForExpression.charAt(resultForExpression.length-1))
      if(isError){
        console.log("올바른 계산식이 아닙니다.");
        return{
              ...initialState
            }   
      }

      return {
        ...state,
        initPad:"C",
        expression: resultForExpression+ "" + action.value
      }
    case "GET_RESULT": // =, +, -
      let value;
      var resultForExpression = state.expression === undefined ? "": state.expression;
        value = action.value === "=" ? "" : action.value;
        var isError = isOperator(action.value) && isOperator(resultForExpression.charAt(resultForExpression.length-1))
        if(isError){
          console.log("올바른 계산식이 아닙니다.");
          return{
                ...initialState
              }   
        }


      return {
        ...state,
        expression:  eval(resultForExpression)+""+ value, // 계산 결과에 선택 연산자 추가하여 새로운 계산식 만들기
        displayNumber:  eval(resultForExpression)
      };

    case "INIT":
      return {
        ...initialState
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const CalculatorStateContext = createContext();
export const CalculatorDispatchContext = createContext();

export const CalculatorProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <CalculatorStateContext.Provider value = {state}>
      <CalculatorDispatchContext.Provider value = {dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorStateContext.Provider>
  )
}


const isOperator = (op) => {
  switch(op){
    case "+":
    case "-":
    case "/":
    case "*":
      return true;
    default:
      return false;
  }
}

