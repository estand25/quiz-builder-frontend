import React from 'react'
import styled from 'styled-components'
import { SectionQuiz } from '../../components/section/quiz'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Quizzes = () => {
    return (
        <Wrapper>
            <SectionQuiz
                AddObjectName={'Quiz'}
            />
        </Wrapper>
    )
}

export default Quizzes