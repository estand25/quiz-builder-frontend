import React from 'react'
import styled from 'styled-components'
import { Options, ReadOnly, CustomOption, InputOption } from '../modals/EntryTypes'

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
                    <Label>{props.label + ": "}</Label>       
                    <Input
                        type="text"
                        value={props.value[props.label]}
                        onChange={e => props.onChange(props.label, e.target.value)}
                    />
                </Spacing>  
            )
        case 'Option':
            return (
                <Options
                    label={props.label}
                    value={props.value}
                    list={list}
                    onChange={props.onChange}
                />
            )
        case 'ReadOnly': 
            return (
                <ReadOnly
                    label={props.label}
                    value={props.value}
                />
            )
        case 'CustomOption':
            var val = Object.entries(props.value.Options)
                .map(i => {                    
                    return Object.entries(i[1])[0][1]
                })
                
            return (
                <CustomOption
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                    list={val}
                />
            )
        case 'InputOption':  
            return (
                <InputOption
                    label={props.label}
                    list={props.value.Options}
                    onChange={props.onChange}
                />
            )
        default:
            return (
                <></>
            )
    }
}

export default Entry

// const InputText = (props) => {
//     const { label, value, onChange} = props

//     return (     
//         <Spacing>
//             <Label>{label + ": "}</Label>       
//             <InputText
//                 type="text"
//                 value={value[label]}
//                 onChange={e => onChange(props.label, e.target.value)}
//             />
//         </Spacing>  
//     )
// }