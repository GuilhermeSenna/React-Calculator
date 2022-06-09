import { useEffect, useReducer } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import './styles.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  // CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function App() {

  // state, action
  const reducer = (state, { type, payload }) => {

    // console.log(payload)

    switch (type) {
      case ACTIONS.ADD_DIGIT:

        if (state.overwrite) {
          return {
            ...state,
            currentOperand: payload.digit,
            overwrite: false
          }
        }


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
      case ACTIONS.DELETE_DIGIT:
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currentOperand: null
          }
        }

        if (state.currentOperand == null) return state

        // With only one value on the stack
        if (state.currentOperand.length === 1) {
          return { ...state, currentOperand: null }
        }

        // Remove the last digit
        return {
          currentOperand: state.currentOperand.slice(0, -1)
        }
      case ACTIONS.EVALUATE:
        if (state.operation == null || state.currentOperand == null || state.previousOperand == null) return state

        // After the evaluation is finished, the new value will overwrite the remaining
        return {
          ...state,
          overwrite: true,
          previousOperand: null,
          operation: null,
          currentOperand: evaluate(state)
        }

      // Starts with 0
      default:
        return {
          operation: null,
          previousOperand: null,
          currentOperand: evaluate(0)
        }
    }
  }

  // Function that returns the result
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

  // Add comma for decimal separation
  const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });

  // Logic for decimal separation and floating point
  const formatOperand = (operand) => {
    if (operand == null) return
    const [integer, decimal] = operand.split('.')
    if (decimal == null) return INTEGER_FORMATTER.format(integer);

    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
  }

  const clearHandler = () => {
    dispatch({ type: '' });
  }

  const evaluateHandler = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  }

  const deleteHandler = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT });
  }

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  // Starts initial value with 0
  useEffect(() => {
    dispatch({ type: '' })
  }, [])

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={clearHandler}>AC</button>
      <button onClick={deleteHandler}>DEL</button>
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
