import { createStore , combineReducers } from "redux";
import { userReducer } from "./views/auth/store/reducer";


const store = combineReducers ({
    userStore : userReducer
})

export default createStore(store);