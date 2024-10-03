import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from 'redux';
import counterReducer from './counter';
import authReducer from './auth';


// const counterReducer = (state = initialCounterState, action) => {
//     if(action.type === "increment"){
//         return {
//             ...state,
//             count: state.count + action.amount
//         }
//     }
//     if(action.type === "decrement"){
//         return {
//             ...state,
//             count: state.count - 1
//         }
//     }
//     if (action.type === "toggle"){
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }



//const store = createStore(counterReducer);


// use redux toolkit for better code quality and maintainability

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})


export default store;