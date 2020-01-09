import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import apis from '../../../api'
import { Constant } from '../preivew'
import { ModifyItem } from '../modals'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
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
const Submit = styled.div.attrs({
    className: 'btn btn-outline-secondary'
})`
margin 15px 15px 15px 5px
`

const Cancel = styled.div.attrs({
    className: 'btn btn-outline-danger',
})`
    margin 15px 15px 15px 15px
`

const BuildField = (props) => {
    var {item, value, changeState} = props

    var val = Object.values(item.Options)
        .map(i => {
            return Object.entries(i)[0][1]
        })    

    return ( 
        <div>
            <Label>{item.Question}</Label> 
            <Select
                value={value[item.Order]}
                onChange={e => changeState(item.Order, e.target.value)}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {Object.values(val).map((i) =>                             
                    <option key={i} value={i}>
                        {i}
                    </option>
                )} 
            </Select>
        </div>    
    )
}

//https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105
const BuildItem = (props) => {
    var {State} = props
    const [expand, setExpand] = useState(false)
    const [_state_, setState] = useState(State)

    const changeState = (name, value) => {        
        var internalState = Object.assign({}, State)

        Object.getOwnPropertyNames(State)
            .forEach(val => {
                if(val == name){
                    internalState[name] = value
                }
            })
            State = Object.assign(State, internalState)
            setState(internalState)
    }

    const ExpandButton = (props) => {
        const { length, setExpand } = props
        
        if(length > 0){
            return (
                <div>
                    <Submit>
                        {'Submit'}
                    </Submit>
                    <Cancel onClick={() => setExpand(!expand)}>
                        {'Cancel'}
                    </Cancel>
                </div>
            )
        } else {
            return (
                <></>
            )
        }
    }

    const ExpandLabel = () => {
        if(expand){
            return (
                <div>
                    <ExpandBtn onClick={() => setExpand(!expand)}>
                        <ExpandImage
                            src='https://img.icons8.com/flat_round/64/000000/arrow--v1.png'   
                        />
                    </ExpandBtn>
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
                    <ExpandButton
                        length={props.Questions.length}
                        setExpand={() => setExpand(!expand)}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <ExpandBtn onClick={() => setExpand(!expand)}>
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

const BuildList = ({quizzies, questions}) => {
    
    var buildList = []
    for(var a = 0; a < quizzies.length ; a++){
        var buildItem = {}

        buildItem._id = quizzies[a]._id
        buildItem.Name = quizzies[a].Name
        buildItem.Description = quizzies[a].Description
        buildItem.Status = quizzies[a].Status
        buildItem.Questions = []
        buildItem.State = {}
        
        for(var b = 0; b < questions.length; b++){
            var questionItem = {}
            var _state_ = {}

            if(quizzies[a].Name == questions[b].Quiz){   
                _state_[questions[b].Order] = ""                  
                questionItem._id = questions[b]._id
                questionItem.Question = questions[b].Question
                questionItem.Options = questions[b].Options
                questionItem.Answer = questions[b].Answer
                questionItem.Status = questions[b].Status
                questionItem.Order = questions[b].Order
                questionItem.Point = questions[b].Point

                buildItem.Questions.push(questionItem)
            }
            buildItem.State = Object.assign(buildItem.State,_state_)
        }

        buildList.push(buildItem)
    }    

    return (
        <Wrapper>
            {buildList.map((i) => 
                <div key={i._id}>
                    <BuildItem
                        {...i}
                    />
                </div>
            )}
        </Wrapper>
    )
}

const SectionPreview = () => {
    const [quizzies, setQuizzies] = useState([])
    const [questions, setQuestions] = useState([])
    const [buildQuiz, setBuildQuiz] = useState([])

    useEffect(
        () => {
            apis.getAllQuiz()
                .then(q => {
                    if(q.data.success == true){
                        var _quiz = q
                            .data
                            .data
                            .map((i) => (
                                {
                                    _id: i._id,
                                    Name: i.name,
                                    Description: i.description, 
                                    Status: i.status == 1 ? 'On' : 'Off'
                                }
                            ))
                        setQuizzies(_quiz)
                    }
                })
            
            apis.getAllQuestion()
                .then(q => {
                    if(q.data.success == true){
                        var _question = q
                            .data
                            .data
                            .map((i) => (
                                {
                                    _id: i._id,
                                    Question: i.question,
                                    Options: i.options,
                                    Answer: Object.values(Object.entries(i.options)[i.answer-1][1])[0],
                                    Status: i.status == 1 ? 'On' : 'Off',
                                    Order: i.order,
                                    Point: i.point,
                                    Quiz: i.quizName
                                }
                            ))
                        setQuestions(_question)
                    }
                })
            
            
        },[]
    )

    return (
        <Wrapper>
            <div>Section Preview</div>
            <BuildList
                quizzies={quizzies}
                questions={questions}
            />
        </Wrapper>
    )
}

export default SectionPreview