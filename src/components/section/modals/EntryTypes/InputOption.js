import React, { useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import {ArrayList} from '../../modals'

const InputText = styled.input.attrs({
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

const InputOption = (props) => {
    var {label, list, onChange} = props
    const [input, setInput] = useState('')

    return (  
        <div>
            <Spacing>
                <Label>{label + ": "}</Label>       
                <InputText
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}  
                    onKeyDown={ e =>{
                        if(e.key === 'Enter' && e.target.value !== ''){
                            var list_ = _.isArray(list) ? list : new Array()

                            var index = list.length+1
                            var item = {
                                [index]: e.target.value
                            }
                            list_.push(item)
                            setInput('')
                            return onChange(label, list_)
                        }
                    }}                  
                />   
                {ArrayList(list, false, label, onChange)}
            </Spacing>
        </div>
    )
}

export default InputOption