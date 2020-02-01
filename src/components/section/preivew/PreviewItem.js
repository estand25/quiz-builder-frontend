import React, {useState} from 'react'
import { DisplayAlert, VerifyResponse, BuildSubmitBtn, BuildFieldArea } from '../modals'
import styled from 'styled-components'

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`
const ExpandBtn = styled.button`
    width: 10px;
    height: 25px;
    border: 1px solid black;
    flex-direction: column;
`

const BuildItem = (props) => {
    var {State} = props
    
    const [show, setShow] = useState(false)
    const [expand, setExpand] = useState(false)
    const [displayBody, setDisplayBody] = useState({})
    var [_state_, setState] = useState(State)

    const changeState = (name, value) => {      
        var internalState = Object.assign({}, _state_)
        Object.getOwnPropertyNames(State)
            .forEach(val => {
                if(val == name){
                    internalState[name] = value
                }
            })
            setState(internalState)
    }

    const ExpandLabel = () => {
        if(expand){
            return (
                <div>
                    <ExpandBtn 
                        onClick={() => setExpand(!expand)}
                    />
                    <Label>{props.Name}</Label>
                    <BuildFieldArea
                        list={props.Questions}
                        state={_state_}
                        changeState={(n,v) => changeState(n,v)}
                    />
                    <BuildSubmitBtn
                        length={props.Questions.length}
                        setExpand={() => setExpand(!expand)}
                        onSubmit={() => VerifyResponse(_state_, props.Questions, () => setShow(!show), setDisplayBody)}
                    />
                    <DisplayAlert
                        show={show}
                        onHide={() => {
                            setShow(!show); 
                            setDisplayBody({});
                        }}
                        title={'Preview Result - ' + props.Name}
                        body={displayBody}
                        setShow={() => {
                            setShow(!show); 
                            setDisplayBody({});
                        }}
                        onSubmit={() => setShow(!show)}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <ExpandBtn onClick={() => {setExpand(!expand); State = {}; setState({}); }}/>
                    <Label>{props.Name}</Label>
                </div>
            )
        }
    }

    return (
        <div>
            <ExpandLabel/>
        </div>
    )
}

export default BuildItem