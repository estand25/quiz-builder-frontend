import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj } from '../modals'
import { score } from '../../../actions'

import api from '../../../api'

import { ItemScore } from '.'

const SectionScore = (props) => {
    const sDispatch = useDispatch()
    const [scores, setScores] = useState([])

    useEffect(
        () => {
            api.getAllScore()
                .then(s => {
                    if(s.data.success === true){
                        var scores = s.data.data.map(i => (
                            {
                                _id: i._id,
                                score: i.score,
                                nonAnswered: i.nonAnswered
                            }
                        ))
                        
                        setScores(scores)
                    }
                })
        }
    )

    const onHandleAddScore = () => {
        sDispatch(score.setTitle(''))
        sDispatch(score.setQuestionCount(0))
    }

    return (
        <div>
            <AddObj
                onAddHandle={onHandleAddScore}
                AddObjectName={props.AddObjectName}
            />
            <ListObj
                list={scores}
                template={ItemScore}
            />
        </div>
    )
}

export default SectionScore