import React from 'react'
import { AddObj } from '../modals'
import { useDispatch } from 'react-redux'
import { score } from '../../../actions'

const AddScore = (props) => {
    const sDispatch = useDispatch()

    const onHandleAddScore = () => {
        sDispatch(score.setTitle(''))
        sDispatch(score.setQuestionCount(0))
    }

    return (
        <AddObj
            onAddHandle={onHandleAddScore}
            AddObjectName={props.AddObjectName}
        />
    )
}

export default AddScore