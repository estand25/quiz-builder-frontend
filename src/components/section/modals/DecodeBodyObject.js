import React from 'react'
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

const DecodeBodyObject = ({body}) => {    
    var returnValue = []

    for(var i = 0; i < Object.getOwnPropertyNames(body).length; i++ ){
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

export default DecodeBodyObject