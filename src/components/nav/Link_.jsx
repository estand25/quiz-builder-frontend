import React from './node_modules/react'
import { Link } from './node_modules/react-router-dom'
import styled from './node_modules/styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Link_ = () => {
    return (
        <React.Fragment>
            <Link to="/about" className="navbar-brand">
                About
            </Link>
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
        </React.Fragment>
    )
}

export default Link_