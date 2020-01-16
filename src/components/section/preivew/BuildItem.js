import React, {useState, useEffect} from 'react'
import { BuildField, BuildSubmitBtn } from '../preivew'
import styled from 'styled-components'

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`
const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const ExpandBtn = styled.button`
    width: 10px;
    height: 25px;
    border: 1px solid black;
    flex-direction: column;
`
const ExpandImage = styled.img`
    width: 100%;
    height: 100%;
`

const VerifyResponse = (state, questionList) => {
    console.log('VerifyResponse onSubmit', state);
    console.log('VerifyResponse onSubmit', questionList);
    
    if(state == {}){
        window.alert('You have not responsed to any of the questions. Please response.')
    }
    var score = 0
    Object.getOwnPropertyNames(state)
        .forEach(val => {
            // console.log('User Response All', questionList[val-1]);
            console.log('User Response Answer', questionList[val-1].Answer);
            console.log('User Response Response', state[val]);

            if(questionList[val-1].Answer == state[val]){
                console.log('Points', questionList[val-1].Point);
                score = score + questionList[val-1].Point
            }
        })

    console.log('User Response Score', score);
   //https://upmostly.com/tutorials/modal-components-react-custom-hooks
   //Not sure I will use hook, but everything else maybe 
}

const BuildItem = (props) => {
    var {State} = props
    
    const [expand, setExpand] = useState(false)
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
                    {props.Questions.sort((i) => {return i.sort}).map((item, index) =>
                        <Row key={index}>
                            <BuildField
                                item={item}
                                value={_state_}
                                changeState={(n,v) => changeState(n,v)}
                            />
                        </Row>
                    )}
                    <BuildSubmitBtn
                        length={props.Questions.length}
                        setExpand={() => setExpand(!expand)}
                        onSubmit={() => VerifyResponse(_state_, props.Questions)}
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