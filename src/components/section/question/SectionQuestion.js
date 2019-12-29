import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj, Item, AddItem } from '../modals'
import { question } from '../../../actions'

import api from '../../../api'

import { ItemQuestion } from './ItemQuestion'

import { Constant } from '../question'

const SectionQuestion = (props) => {
    const qDispatch = useDispatch()
    const [addStatus, setAddStatus] = useState(false)
    const [questions, setQuestions] = useState([])

    const { itemEntries, initialItemStates } = Constant

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
        },[]
    )

    const handleAddQuestion = () =>  {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuestion}
                AddObjectName={props.AddObjectName}
            />
            <AddItem 
                status={addStatus}
                _state={initialItemStates}
                entries={itemEntries}
            />
            {/* <ListObj
                list={questions}
                template={ItemQuestion}
            /> */}
        </div>
    )
}

export default SectionQuestion