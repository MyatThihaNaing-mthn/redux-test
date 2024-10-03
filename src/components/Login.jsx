import { useDispatch } from "react-redux"
import { authActions } from "../store/auth";

export default function Login(){
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.login())
    }
    return (
        <>
            <button onClick={loginHandler}>Login</button>
        </>
    )
}