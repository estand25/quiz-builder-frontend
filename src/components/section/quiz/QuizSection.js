import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj } from '../modals'
import { quiz } from '../../../actions'

import api from '../../../api'
import { ItemQuiz } from '.'

const QuizSection = (props) => {
    const qDispatch = useDispatch()
    const [quizzies, setQuizzies] = useState([])

    useEffect(
        () => {
            api.getAllQuiz()
                .then(q => {
                    if(q.data.success == true){
                        var quiz = q.data.data.map(i => (
                            {
                                _id: i._id,
                                name: i.name,
                                description: i.description, 
                                status: i.status == 1 ? 'On' : 'Off'
                            }
                        ))

                        setQuizzies(quiz)
                    }
                })
        }
    )

    const handleAddQuiz = () => {
        qDispatch(quiz.setName(''))
        qDispatch(quiz.setDescription(''))
        qDispatch(quiz.setStatue(false))
    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuiz}
                AddObjectName={props.AddObjectName}
            />
            <ListObj
                list={quizzies}
                template={ItemQuiz}
            />
        </div>
    )
}

export default QuizSection