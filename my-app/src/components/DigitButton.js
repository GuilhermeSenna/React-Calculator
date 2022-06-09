import { ACTIONS } from "../App"

const DigitButton = ({ dispatch, digit }) => {

    // console.log(digit)

    const buttonHandler = () => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
    }

    return <button onClick={buttonHandler}>{digit}</button>
}

export default DigitButton;