import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddObj, ListObj, Item, AddItem } from '../modals'
import api from '../../../api'
import { quiz } from '../../../actions'

import { Constant } from '../quiz'

const SectionQuiz = (props) => {
    const qDispatch = useDispatch()
    const { AddObjectName } = props
    const [addStatus, setAddStatus] = useState(false)

    const [quizzies, setQuizzies] = useState([])

    const { itemEntries, initialItemStates } = Constant

    var entries = [...itemEntries]
    entries.unshift(['_id', 'ReadOnly'])

    useEffect(
        () => {
            api.getAllQuiz()
                .then(q => {
                    if(q.data.success == true){
                        var _quiz = q.data.data.map(i => (
                            {
                                _id: i._id,
                                Name: i.name,
                                Description: i.description, 
                                Status: i.status == 1 ? 'On' : 'Off'
                            }
                        ))

                        setQuizzies(_quiz)
                        qDispatch(quiz.setAllQuiz(_quiz))
                    }
                })
        },[]
    )

    const handleAddQuiz = () => {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    const handleDeleteQuiz = (item_id) => {
        if(
            window.confirm(
                'Do you want to delete this Quiz permanently?'
            )
        ) {
            api.deleteQuizById(item_id)
            window.location.reload()
        }
    }

    const handleModifyQuiz = (state, setOnEdit) => {
        const {_id, Name, Description, Status} = state

        var payload = {
            name: Name,
            description: Description,
            status: Status == 'On' ? 1 : 0
        }

        if(
            window.confirm(
                'Are you sure you want to updated this Quiz?'
            )
        ) {
            api.updateQuizById(_id, payload)
                .then(res => {
                    if(res.data.success){
                        window.location.reload()
                        window.alert('Quiz edit successfully !!')
                        setOnEdit(false)
                    }
                })
        }
    }

    const handleNewQuiz = (state) => {

    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuiz}
                AddObjectName={AddObjectName}
            />
            <AddItem 
                status={addStatus}
                _state={initialItemStates}
                entries={itemEntries}
            />
            <ListObj
                list={quizzies}
                template={Item}
                itemDelete={handleDeleteQuiz}
                itemModify={handleModifyQuiz}
                entries={entries}
            />
        </div>
    )
}

export default SectionQuiz