import React from 'react'
import styled from 'styled-components'
import { QuizSection } from '../../components/section/quiz'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Quizzes = () => {
    return (
        <Wrapper>
            <QuizSection
                AddObjectName={'Quiz'}
            />
        </Wrapper>
    )
}

export default Quizzes