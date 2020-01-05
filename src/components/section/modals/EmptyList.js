import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`
const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const EmptyList = ({ emptyMessage }) => {
    return (
        <Wrapper>
            <Label>{emptyMessage}</Label>
        </Wrapper>
    )
}

export default EmptyList