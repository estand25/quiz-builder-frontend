import { combineReducers } from 'redux'
import auth from './auth'
import question from './question'
import quiz from './quiz'
import score from './score'

export default combineReducers({
    auth,
    question,
    quiz,
    score
})