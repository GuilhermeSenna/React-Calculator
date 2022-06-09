import { useReducer } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import './styles.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function App() {

  // state, action
  const reducer = (state, { type, payload }) => {

    // console.log(payload)

    switch (type) {
      case ACTIONS.ADD_DIGIT:
        // Doesn't allow adding more zeros if there is only one
        if (payload.digit === "0" && state.currentOperand === "0") return state
        if (payload.digit === "." && state.currentOperand.includes(".")) return state
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`
        }
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && state.previousOperand == null) {
          return state;
        }

        // Allows to change the operator without cleaning the display
        if (state.currentOperand == null) {
          return {
            ...state,
            operation: payload.operation
          }
        }

        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null
          }
        }

        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.operation,
          currentOperand: null
        }
      case ACTIONS.CLEAR:
        return {};
      default:
        return state
    }
  }

  const evaluate = ({ currentOperand, previousOperand, operation }) => {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return "";

    let computation = ""

    switch (operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "*":
        computation = prev * current
        break
      case "/":
        computation = prev / current
        break
      default:
        return "";
    }

    return computation.toString();
  }

  const clearHandler = () => {
    dispatch({ type: ACTIONS.CLEAR });
  }

  const evaluateHandler = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  }

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={clearHandler}>AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two" onClick={evaluateHandler}>=</button>
    </div>
  );
}

export default App;
