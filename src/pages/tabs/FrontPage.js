import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const FrontPage = () => {
    return (
        <Wrapper>
            <div>Front Page</div>
        </Wrapper>
    )
}

export default FrontPage