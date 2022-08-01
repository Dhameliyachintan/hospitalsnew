import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/Index'


export const Counterreducer = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk))

    return store    
}
