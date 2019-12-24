import React from 'react'
import styled from 'styled-components'
import { AddQuestion } from '../../components/section/question'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Questions = () => {
    return (
        <Wrapper>
            <AddQuestion
                AddObjectName={'Question'}
            />
        </Wrapper>
    )
}

export default Questions