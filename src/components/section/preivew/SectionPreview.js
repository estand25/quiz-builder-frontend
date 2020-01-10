import React, { useEffect, useState } from 'react'
import apis from '../../../api'
import { BuildList } from '../preivew'

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
        <div>
            <BuildList
                quizzies={quizzies}
                questions={questions}
            />
        </div>
    )
}

export default SectionPreview