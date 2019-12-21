import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Scores = () => {
    return (
        <Wrapper>
            <div>Scores</div>
        </Wrapper>
    )
}

export default Scores