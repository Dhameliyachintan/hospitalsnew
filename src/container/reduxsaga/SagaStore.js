import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thank from "redux-thank"
import { rootReducer } from './Index'

import reducer from './reducers'
import { rootSaga } from './Rootsaga'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [thank, sagaMiddleware]

// sagaMiddleware.run(rootSaga, reducer)

export const Configreducer = () => {
    let store = createStore(rootReducer, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store

}
