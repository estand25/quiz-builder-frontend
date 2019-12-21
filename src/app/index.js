import React from 'react'

import {
    NavBar
} from '../components/index'

import{
    About,
    FrontPage,
    Quizzes,
    Questions,
    Scores,
    Preview,
    Build
} from '../page/index'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
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
            </Switch>
        </Router>
    )
}

export default App;