import { combineReducers } from "redux";
import { SignupReducer } from "./Auth.reducer";



export const rootReducer = combineReducers({
       auth : SignupReducer
})