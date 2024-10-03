import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../store/counter";

/*
Improved code maintainability using redux toolkit
*/
export default function EnhancedCounter() {
    const counter = useSelector(state => state.counter.count)
    const showCounter = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(counterActions.toggleCounter())
    }
    const incrementHandler = () => {
        dispatch(counterActions.increase(10))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <>
            {showCounter &&
                <>
                    <p>{counter}</p>
                    <button onClick={incrementHandler}>Increment</button>
                    <button onClick={decrementHandler}>Decrement</button>
                </>}
            <button onClick={toggleHandler}>Toggle Counter</button>
        </>
    )
}