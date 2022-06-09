import { ACTIONS } from "../App"

const OperationButton = ({ dispatch, operation }) => {

    // console.log(digit)

    const buttonHandler = () => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
    }

    return <button onClick={buttonHandler}>{operation}</button>
}

export default OperationButton;