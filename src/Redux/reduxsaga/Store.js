import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from '../Reducer/Index'


// import reducer from './reducers'
import { rootSaga } from './Rootsaga'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

// sagaMiddleware.run(rootSaga, reducer)

export const Configreducer = () => {
    let store = createStore(rootReducer, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store

}
