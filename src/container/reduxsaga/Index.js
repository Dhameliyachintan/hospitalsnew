import { combineReducers } from "redux";
import { SignupReducer } from "./Auth.reducer";



export const rootReducer = combineReducers({
       reducer : SignupReducer
})