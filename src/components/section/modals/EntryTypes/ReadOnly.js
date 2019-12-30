import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Spacing = styled.div`
    padding: 5ps;
`

const ReadOnly = (props) => {
    const {label, value} = props

    return (
        <Spacing>
            <Label>{label + ": " + value[label]}</Label>
        </Spacing>
    )
}

export default ReadOnly