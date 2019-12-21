import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Questions = () => {
    return (
        <Wrapper>
            <div>Questions</div>
        </Wrapper>
    )
}

export default Questions