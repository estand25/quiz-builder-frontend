import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const About = () => {
    return (
        <Wrapper>
            <div>About</div>
        </Wrapper>
    )
}

export default About