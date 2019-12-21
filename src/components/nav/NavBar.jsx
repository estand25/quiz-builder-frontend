import React from 'react'
import styled from 'styled-components'

import Link_ from './Link_'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.div.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark'
})`
    margin-bottom: 20 px;
`

const NavBar = () => {
    return (
        <Container>
            <Nav>
                <Link_/>
            </Nav>
        </Container>
    )
}

export default NavBar