import React from 'react'
import styled from 'styled-components'

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
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

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Spacing = styled.div`
    padding: 5ps;
`

const Entry = (props) => {        
    var list = ''
    var type = ''

    if(_.isArray(props.type)){
        var temp = Object.values(props.type)
        type = temp[0]
        list = temp[1]
        
    } else {
        type = props.type
    }    

    switch (type) {
        case 'InputText':
            return (      
                <Spacing>
                    <Label>{props.label}</Label>       
                    <InputText
                        type="text"
                        value={props.value[props.label]}
                        onChange={e => props.onChange(props.label, e.target.value)}
                    />
                </Spacing>  
            )
        case 'Option':
            return (
                <div>
                    <Spacing>
                        <Label>{props.label}</Label>
                    </Spacing>
                    <Select
                        value={props.value[props.label]}
                        onChange={e => props.onChange(props.label, e.target.value)}
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
        case 'ReadOnly': 
            return (
                <Spacing>
                    <Label>{props.label}</Label>
                </Spacing>
            )
        default:
            return (
                <></>
            )
    }
}

export default Entry