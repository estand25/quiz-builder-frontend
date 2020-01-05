import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import persistReducers from '../reducers'

let store = createStore(persistReducers, applyMiddleware(thunk))
let persistor = persistStore(store)

export{
    store,
    persistor
}