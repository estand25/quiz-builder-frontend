import React from 'react'
import { Options, ReadOnly, CustomOption, InputOption, InputText } from '../modals/EntryTypes'

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
                <InputText
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
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