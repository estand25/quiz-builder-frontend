import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    font-size: 14px;
    border: 1px solid black;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 15px 15px 15px 15px;
    }
`

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Spacing = styled.div`
    padding: 5ps;
`
const Options = (props) => {
    const {label, value, onChange, list } = props
    return (
        <div>
            <Spacing>
                <Label>{props.label + ": "}</Label>
            </Spacing>
            <Select
                value={value[label]}
                onChange={e => onChange(label, e.target.value)}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {list.map((l) =>                             
                    <option key={l} value={l}>
                        {l}
                    </option>
                )}
            </Select>
        </div>
    )
}

export default Options