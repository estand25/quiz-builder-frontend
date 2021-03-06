import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddEditListItem } from '../modals'
import api from '../../../api'
import { quiz } from '../../../actions'

import { Constant } from '../quiz'

const SectionQuiz = (props) => {
    const qDispatch = useDispatch()
    const qAuth = useSelector(state => state.auth)
    const { AddItemTitleName } = props  
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
                        var _quiz = q
                            .data
                            .data
                            .filter((i) => i.userId == qAuth.userId)
                            .map(i => (
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
        const {_id, Name, Description, Status} = state

        var payload = {
            name: Name,
            description: Description,
            status: Status == 'On' ? 1 : 0
        }

        api.insertQuiz(payload)
            .then(res => {
                if(res.data.success){
                    window.location.reload()
                    window.alert('New Quiz successfully created !!')
                    setAddStatus(false)
                }
            })
    }

    return (
        <div>
            <AddEditListItem
                onAddHandle={handleAddQuiz}
                addItemTitle={AddItemTitleName}
                status={addStatus}
                setAddStatus={setAddStatus}
                state={initialItemStates}
                list={quizzies}
                itemNew={handleNewQuiz}
                itemDelete={handleDeleteQuiz}
                itemModidy={handleModifyQuiz}
                addEntries={itemEntries}
                entries={entries}
                emptyMessage={'No quiz are present'}
            />
        </div>
    )
}

export default SectionQuiz