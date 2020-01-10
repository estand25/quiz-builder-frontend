import React from 'react'
import styled from 'styled-components'

import { BuildItem } from '../preivew'

const Wrapper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

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
            {buildList.length > 0 ?
            buildList.map((i) => 
                <div key={i._id}>
                    {/* {i.Questions.length > 0 ? */}
                    <BuildItem
                        {...i}
                    /> 
                    {/* : <></> } */}
                </div>
            ) : ''}
        </Wrapper>
    )
}

export default BuildList