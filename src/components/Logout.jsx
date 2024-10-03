import { useDispatch } from "react-redux"
import { authActions } from "../store/auth";


export default function Logout(){
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.logout())
    }
    return (
        <>
            <button onClick={logoutHandler}> Logout</button>
        </>
    )
}