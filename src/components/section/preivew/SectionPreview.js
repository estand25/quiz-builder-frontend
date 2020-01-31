import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import apis from '../../../api'
import { buildList } from '../../../actions'
import { BuildList } from '../preivew'

const SectionPreview = () => {
    const qDispatch = useDispatch()

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
                        qDispatch(buildList.setBuildListQuiz(_quiz))
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
                        qDispatch(buildList.setBuildListQuestion(_question))
                    }
                })
        },[]
    )

    return (
        <div>
           <BuildList /> 
        </div>
    )
}

export default SectionPreview