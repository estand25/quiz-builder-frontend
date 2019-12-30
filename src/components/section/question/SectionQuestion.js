import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj, Item, AddItem } from '../modals'
import { question } from '../../../actions'

import api from '../../../api'

import { Constant } from '../question'

const SectionQuestion = (props) => {
    const qDispatch = useDispatch()
    const { AddObjectName } = props
    const [addStatus, setAddStatus] = useState(false)
    const [questions, setQuestions] = useState([])

    const { itemEntries, initialItemStates } = Constant   

    var entries = [...itemEntries]
    entries.unshift(['_id', 'ReadOnly'])

    useEffect(
        () => {
            api.getAllQuestion()
                .then(q => {
                    if(q.data.success === true){
                        var question = q.data.data.map(i => (
                            {
                                _id: i._id,
                                Question: i.question,
                                Options: i.options,
                                Answer: Object.values(Object.entries(i.options)[i.answer-1][1])[0],
                                Status: i.status == 1 ? 'On' : 'Off',
                                Order: i.order,
                                Point: i.point,
                            }
                        ))                        
                        console.log('useEffect', question);
                        
                        setQuestions(question)
                    }
                })
        },[]
    )

    const handleAddQuestion = () =>  {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    const handleDeleteQuestion = (item_id) => {
        if(
            window.confirm(
                'Do you want to delete this Question permanently?'
            )
        ) {
            api.deleteQuestionById(item_id)
            window.location.reload()
        }
    }

    const handleModifyQuestion = (state, setOnEdit) => {s
        const {_id, Question, Options, Answer, Status, Point, Order} = state

        var payload = {
            name: Name,
            description: Description,
            status: Status == 'On' ? 1 : 0
        }

        if(
            window.confirm(
                'Are you sure you want to updated this Question?'
            )
        ) {
            api.updateQuestionById(_id, payload)
                .then(res => {
                    if(res.data.success){
                        window.location.reload()
                        window.alert('Question edit successfully !!')
                        setOnEdit(false)
                    }
                })
        }
    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuestion}
                AddObjectName={AddObjectName}
            />
            <AddItem 
                status={addStatus}
                _state={initialItemStates}
                entries={itemEntries}
            />
            <ListObj
                list={questions}
                template={Item}
                itemDelete={handleDeleteQuestion}
                itemModify={handleModifyQuestion}
                entries={entries}
            />
        </div>
    )
}

export default SectionQuestion