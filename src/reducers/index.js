import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import auth from './auth'
import question from './question'
import quiz from './quiz'
import score from './score'
import buildlist from './buildlist'

const combinePersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
}

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    buildlist,
    question,
    quiz,
    score
})

export default persistReducer(combinePersistConfig, rootReducer)