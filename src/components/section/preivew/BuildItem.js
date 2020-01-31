import React, {useState, useEffect} from 'react'
import { BuildField, BuildSubmitBtn } from '../preivew'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'

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

const VerifyResponse = (state, questionList, setShow, setDisplayBody) => {
    if(state == {}){
        window.alert('You have not responsed to any of the questions. Please response.')
    }
    var returnValue = {}
    var score = 0

    for(var i = 1; i <= Object.getOwnPropertyNames(state).length; i ++){
        var displayItem = {}
        console.log('User Response Answer in For', questionList[i-1].Answer);
        console.log('User Response Response in For', state[i]);
        console.log('User Response Point in For', questionList[i-1].Point);

        displayItem.Question = questionList[i-1].Question
        displayItem.Answer = questionList[i-1].Answer
        displayItem.Response = state[i]

        if(questionList[i-1].Answer == state[i]){
            console.log('Points in For', questionList[i-1].Point);

            displayItem.IsCorrect = true
            score = score + questionList[i-1].Point
        } else {
            displayItem.IsCorrect = false
        }
        returnValue[i] = displayItem
    }

    console.log('User Response Score', score);
    // if(score > 0){
    setShow()
    returnValue.Score = score
    // }
    setDisplayBody(returnValue)
}


const DecodeBodyObject = ({body}) => {
    console.log('DecodeBodyObject', Object.getOwnPropertyNames(body));
    
    var returnValue = []
    for(var i = 0; i < Object.getOwnPropertyNames(body).length; i++ ){
        console.log('DecodeBodyObject'+i, body[Object.getOwnPropertyNames(body)[i]]);

        var index = Object.getOwnPropertyNames(body)[i] ? Object.getOwnPropertyNames(body)[i] + "" : ""
        var question = body[Object.getOwnPropertyNames(body)[i]].Question ? "Question: " + body[Object.getOwnPropertyNames(body)[i]].Question : ""
        var answer = body[Object.getOwnPropertyNames(body)[i]].Answer ? "Answer: " + body[Object.getOwnPropertyNames(body)[i]].Answer : ""
        var response = body[Object.getOwnPropertyNames(body)[i]].Response ? "Response: " + body[Object.getOwnPropertyNames(body)[i]].Response : ""
        var score = Object.getOwnPropertyNames(body)[i] == "Score" ? "Score: " + body[Object.getOwnPropertyNames(body)[i]] : body[Object.getOwnPropertyNames(body)[i]].IsCorrect ? 'Answer is Correct' : 'Answer is Incorrect'
        
        returnValue.push(
            <div key={i}>
                <Row> 
                    <Label>{question}</Label>
                    <Label>{answer}</Label>
                    <Label>{response}</Label>
                    <Label>{score}</Label>
               </Row>
            </div>
            )
    }
    return returnValue
}

const DisplayAlert = ({show, onHide, title,  body, onSubmit, setShow}) => {
    return (
        <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{'Preview Result - ' + title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DecodeBodyObject
                    body={body}
                />
            </Modal.Body>
            <Modal.Footer>
                <BuildSubmitBtn
                    length={1}
                    setExpand={setShow}
                    onSubmit={onSubmit}
                />
            </Modal.Footer>
        </Modal>
    )
}

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
                        onSubmit={() => VerifyResponse(_state_, props.Questions, () => setShow(!show), setDisplayBody)}
                    />
                    <DisplayAlert
                        show={show}
                        onHide={() => setShow(!show)}
                        title={props.Name}
                        body={displayBody}
                        setShow={() => {setShow(!show); setDisplayBody({});}}
                        onSubmit={() => ''}
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