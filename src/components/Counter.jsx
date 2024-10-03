import { useDispatch, useSelector } from "react-redux"

export default function Counter(){
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch();
    
    const toggleHandler = () => {

    }
    const incrementHandler = () => {
        dispatch({type: "increment"})
    }
    const decrementHandler = () => {
        dispatch({type: "decrement"})
    }
    return (
        <>
            <p>{counter}</p>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </>
    )
}