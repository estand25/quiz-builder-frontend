import React, { useState } from 'react'
import styled from 'styled-components'
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
                        if(e.key === 'Enter'){
                            var index = list.length+1
                            var item = {
                                [index]: e.target.value
                            }
                            list.push(item)
                            setInput('')
                            return onChange(label, list)
                        }
                    }}                  
                />
                <ArrayList
                    {...list}
                />
            </Spacing>
        </div>
    )
}

export default InputOption