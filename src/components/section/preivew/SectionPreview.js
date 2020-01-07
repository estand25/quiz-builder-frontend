import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import apis from '../../../api'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

//https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105
const BuildItem = ({name, description}) => {
    const [expand, setExpand] = useState(false)

    const ExpandLabel = () => {
        if(expand){
            return (
                <div>
                    <Label>{'Quiz Name: '+ name}</Label>
                    <Label>{'Quiz Description: '+ name}</Label>
                </div>
            )
        } else {
            return (
                <div>
                    <Label>{'Quiz Name: '+ name}</Label>
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
        buildItem.Description = quizzies[a].description
        buildItem.Status = quizzies[a].Status
        
        buildList.push(buildItem)
    }

    return (
        <Wrapper>
            {buildList.map((i) => 
                <div key={i._id}>
                    <BuildItem
                        name={i.Name}
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
            <div>{'Quiz Count: ' + quizzies.length}</div>
            <div>{'Question Count: ' + questions.length}</div>
            <BuildList
                quizzies={quizzies}
                questions={questions}
            />
        </Wrapper>
    )
}

export default SectionPreview