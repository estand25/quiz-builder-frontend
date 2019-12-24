import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from '../../../actions'
import { AddObj } from '../modals'

const AddQuiz = (props) => {
    const qDispatch = useDispatch()

    const handleAddQuiz = () => {
        qDispatch(quiz.setName(''))
        qDispatch(quiz.setDescription(''))
        qDispatch(quiz.setStatue(false))
    }

    return (
        <AddObj
            onAddHandle={handleAddQuiz}
            AddObjectName={props.AddObjectName}
        />
    )
}
export default AddQuiz