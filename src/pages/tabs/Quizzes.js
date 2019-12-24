import React from 'react'
import styled from 'styled-components'
import { AddQuiz } from '../../components/section/quiz'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Quizzes = () => {
    return (
        <Wrapper>
            <AddQuiz
                AddObjectName={'Quiz'}
            />
        </Wrapper>
    )
}

export default Quizzes