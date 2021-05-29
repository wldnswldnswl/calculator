export const returnSyntaxError = ({state}) => {
    console.log("올바른 계산식이 아닙니다.");
          return{
            ...state,
            expression: state.expression,
            displayNumber: state.displayNumber
          }
}