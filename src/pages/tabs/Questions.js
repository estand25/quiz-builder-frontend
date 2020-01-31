import React from 'react'
import styled from 'styled-components'
import { SectionQuestion } from '../../components/section/question'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Questions = () => {
    return (
        <Wrapper>
            <SectionQuestion
                AddItemTitleName={'Question'}
            />
        </Wrapper>
    )
}

export default Questions