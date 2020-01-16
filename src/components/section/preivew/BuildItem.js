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

const BuildItem = (props) => {
    var {State} = props
    console.log('State start', props.State);
    
    const [expand, setExpand] = useState(false)
    var [_state_, setState] = useState(State)

    const changeState = (name, value) => {        
        console.log('ChangeState', name);  
        console.log('ChangeState', value);
        
        var internalState = Object.assign({}, _state_)
        console.log('ChangeState', internalState);
        // console.log('ChangeState', State);

        Object.getOwnPropertyNames(_state_)
            .forEach(val => {
                console.log('val', val);
                console.log('name', name);
                // console.log('value', value);
                
                if(val == name){
                    internalState[name] = value
                    console.log('InternalState', internalState);
                }
            })
            // _state_ = Object.assign(_state_, internalState)

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
                        onSubmit={() => {
                            console.log('onSubmit state', _state_); 
                            console.log('onSubmit questions', props.Questions);

                            if(_state_ == {}){
                                window.alert('You have not responsed to any of the questions. Please response.')
                            }
                    }}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <ExpandBtn onClick={() => {setExpand(!expand); State = {}; setState({}); }}>
                        <ExpandImage
                            src='https://img.icons8.com/flat_round/64/000000/arrow--v1.png'   
                        />
                    </ExpandBtn>
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