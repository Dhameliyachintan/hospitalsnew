import {combineReducers} from "redux" ;
import { Counterreducer } from "./Counter.reducer";


export const rootReducer = combineReducers ({
    counter: Counterreducer
})

