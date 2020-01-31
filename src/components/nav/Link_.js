import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import AuthNav from './AuthNav'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const AuthLinks = () => {
    return (
        <Collapse>
            <List>
                <Item>
                    <Link to="/quiz" className="nav-link">
                        Quizzes
                    </Link>
                </Item>
                <Item>
                    <Link to="/question" className="nav-link">
                        Questions
                    </Link>
                </Item>
                <Item>
                    <Link to="/score" className="nav-link">
                        Scores
                    </Link>
                </Item>
                <Item>
                    <Link to="/preview" className="nav-link">
                        Preview
                    </Link>
                </Item>
                <Item>
                    <Link to="/build" className="nav-link">
                        Build
                    </Link>
                </Item>
            </List>
        </Collapse>
    )
}

const NonAuthLinks = () => {
    return (
        <Collapse>
            <List>
                <Item>
                    <Link to="/preview" className="nav-link">
                        Preview
                    </Link>
                </Item>
                <Item>
                    <Link to="/build" className="nav-link">
                        Build
                    </Link>
                </Item>
            </List>
        </Collapse>
    )
}

const Link_ = () => {
    const auth = useSelector(state => state.auth)

    const Link_Switch = () => {
        if(auth.userId){
            return (
                <AuthLinks />
            )
        } else {
            return (
                <NonAuthLinks />
            )
        }
        
    }

    return (
        <React.Fragment>
            <Link to="/about" className="navbar-brand">
                About
            </Link>
            <Link_Switch />
            <AuthNav />
        </React.Fragment>
    )
}

export default Link_