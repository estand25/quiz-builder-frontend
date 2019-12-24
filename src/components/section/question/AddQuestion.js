import React, { useEffect, useState } from 'react'
import AddObj from '../modals/AddObj'
import { question } from '../../../actions'
import { useDispatch } from 'react-redux'

import api from '../../../api'

const AddQuestion = (props) => {
    const qDispatch = useDispatch()
    const [questions, setQuestions] = useState([])

    useEffect(
        () => {
            api.getAllQuiz()
                .then(q => {
                    setQuestions(q.data.data)
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
        <AddObj
            AddObjectName={props.AddObjectName}
            onAddHandle={handleAddQuestion}
        />
    )
}

export default AddQuestion