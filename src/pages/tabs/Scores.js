import React from 'react'
import styled from 'styled-components'
import { SectionScore } from '../../components/section/score'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Scores = () => {
    return (
        <Wrapper>
            <SectionScore
                AddObjectName={'Score'}
            />
        </Wrapper>
    )
}

export default Scores