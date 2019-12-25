import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj } from '../modals'
import { question } from '../../../actions'

import api from '../../../api'

import { ItemQuestion } from '.'

const QuestionSection = (props) => {
    const qDispatch = useDispatch()
    const [questions, setQuestions] = useState([])

    useEffect(
        () => {
            api.getAllQuestion()
                .then(q => {
                    if(q.data.success === true){
                        var question = q.data.data.map(i => (
                            {
                                _id: i._id,
                                question: i.question,
                                answer: i.answer,
                                options: i.options,
                                status: i.status == 1 ? 'On' : 'Off',
                                order: i.order,
                                point: i.point
                            }
                        ))                        

                        setQuestions(question)
                    }
                })
        }
    )

    const handleAddQuestion = () =>  {
        qDispatch(question.setAddStatus(''))
        qDispatch(question.setCorrectAnswer(''))
        qDispatch(question.setQuizSelection(''))
        qDispatch(question.setName(''))
        qDispatch(question.setStatus(0))
        qDispatch(question.setOrder(0))
    }

    return (
        <div>
            <AddObj
                AddObjectName={props.AddObjectName}
                onAddHandle={handleAddQuestion}
            />
            <ListObj
                list={questions}
                template={ItemQuestion}
            />
        </div>
    )
}

export default QuestionSection