import { combineReducers } from "redux";
import { alertreducer } from "./Alert.reducer";
import { SignupReducer } from "./Auth.reducer";
import { Counterreducer } from "./Counter.reducer";


export const rootReducer = combineReducers({
    auth : SignupReducer,
    counter: Counterreducer,
    alert : alertreducer
})

