import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

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

const BuildField = (props) => {
    var {item, value, changeState} = props

    var val = Object.values(item.Options)
        .map(i => {
            return Object.entries(i)[0][1]
        })    

    return ( 
        <div>
            <Label>{item.Question}</Label> 
            <Select
                value={value[item.Order]}
                onChange={e => changeState(item.Order, e.target.value)}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {Object.values(val).map((i) =>                             
                    <option key={i} value={i}>
                        {i}
                    </option>
                )} 
            </Select>
        </div>    
    )
}

export default BuildField