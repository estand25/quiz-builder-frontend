import React from 'react'
import styled from 'styled-components'
import { AddScore } from '../../components/section/score'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Scores = () => {
    return (
        <Wrapper>
            <AddScore
                AddObjectName={'Score'}
            />
        </Wrapper>
    )
}

export default Scores