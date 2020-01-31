import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Spacing = styled.div`
    padding: 5ps;
`

const InputText = (props) => {
    const { label, value, onChange} = props

    return (     
        <Spacing>
            <Label>{label + ": "}</Label>       
            <Input
                type="text"
                value={value[label]}
                onChange={e => onChange(label, e.target.value)}
            />
        </Spacing> 
    )
}

export default InputText