import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { rootReducer } from './Reducer/Index'
import { rootSaga } from './reduxsaga/Rootsaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// import reducer from './reducers'


const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

// sagaMiddleware.run(rootSaga, reducer)

const Configreducer = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares))
    sagaMiddleware.run(rootSaga)
    return store
}

export const store = Configreducer()
export const persistor = persistStore(store)
