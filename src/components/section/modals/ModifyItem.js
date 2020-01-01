import React,{useState} from 'react'
import styled from 'styled-components'
import { Entry } from '../modals'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const ModifyItem = (props) => {  
    var {_state, entries } = props

    console.log('ModifyItem', _state);
    console.log('ModifyItem', entries);
    
    const [_state_, setState] = useState(_state) 

    const changeState = (name, value) => {
        var internalState = Object.assign({}, _state_)
        
        Object.getOwnPropertyNames(_state_)
            .forEach(val => {
                if(val === name){
                    internalState[name] = value
                }
            })

        _state = Object.assign(_state, internalState)
        setState(internalState)        
    }
    
    return (
        <Wrapper>
            {entries.map((item,index) => 
                <Row key={index}>
                    <Entry
                        label={item[0]}
                        type={_.isArray(item[1]) ? item[1] : item[1] }
                        value={_state_}
                        onChange={(n,v) => changeState(n,v)}
                    />
                </Row>
            )}
        </Wrapper>
    )
}

export default ModifyItem
