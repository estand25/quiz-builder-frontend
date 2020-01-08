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

//https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105
const BuildItem = (props) => {
    console.log('BuildItem', props);
    
    const [expand, setExpand] = useState(false)

    const ExpandLabel = () => {
        if(expand){
            return (
                <div>
                    <Label>{'Quiz Name: ' + props.Name}</Label>
                    {props.Questions.map((item, index) => 
                        <Row key={index}>
                            <Label>{item.Question}</Label> 
                            <Select
                                value={''}
                                onChange={e => e.target.value}
                            >
                                <option value="" hidden>
                                    - Select One -
                                </option>
                                {Object.values(item.Options).map((index_, item_) =>                             
                                    <option key={index_} value={item_}>
                                        {item_[0]}
                                    </option>
                                )}
                            </Select>    
                        </Row>
                    )}
                </div>
            //{item_[0]}
            )
        } else {
            return (
                <div>
                    <Label>{'Quiz Name: ' + props.Name}</Label>
                </div>
            )
        }
    }

    return (
        <div onClick={() => setExpand(!expand)}>
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
        
        for(var b = 0; b < questions.length; b++){
            var questionItem = {}

            if(quizzies[a].Name == questions[b].Quiz){     
                questionItem._id = questions[b]._id
                questionItem.Question = questions[b].Question
                questionItem.Options = questions[b].Options
                questionItem.Answer = questions[b].Answer
                questionItem.Status = questions[b].Status
                questionItem.Order = questions[b].Order
                questionItem.Point = questions[b].Point

                buildItem.Questions.push(questionItem)
            }
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