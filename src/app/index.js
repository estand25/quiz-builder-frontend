import React from 'react'

import {
    NavBar
} from '../components/nav'

import{
    About,
    FrontPage,
    Quizzes,
    Questions,
    Scores,
    Preview,
    Build,
} from '../pages/tabs'

import{
    LogInUser,
    LogOutUser,
    ProfileUser,
    SignUpUser
} from '../pages/account'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor} from '../store'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={FrontPage}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/quiz" exact component={Quizzes}/>
                        <Route path="/question" exact component={Questions}/>
                        <Route path="/score" exact component={Scores}/>
                        <Route path="/preview" exact component={Preview}/>
                        <Route path="/build" exact component={Build}/>
                        <Route path="/logIn" exact component={LogInUser}/>
                        <Route path="/logOut" exact component={LogOutUser}/>
                        <Route path="/profile" exact component={ProfileUser}/>
                        <Route path="/signUp" exact component={SignUpUser}/>
                    </Switch>
                </Router> 
            </PersistGate>
        </Provider>
    )
}

export default App;