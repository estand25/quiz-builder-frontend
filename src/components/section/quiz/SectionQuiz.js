import React, { useEffect, useState } from 'react'
import { AddObj, ListObj, Item, AddItem } from '../modals'
import api from '../../../api'

import ItemQuiz from './ItemQuiz'

import { Constant } from '../quiz'

const SectionQuiz = (props) => {
    const [addStatus, setAddStatus] = useState(false)

    const [quizzies, setQuizzies] = useState([])

    const [initialState, setInitialState] = useState({})
    const [initialEntries, setInitialEntries] = useState({})

    const { itemEntries, initialItemStates, item } = Constant

    useEffect(
        () => {
            api.getAllQuiz()
                .then(q => {
                    if(q.data.success == true){
                        var quiz = q.data.data.map(i => (
                            {
                                _id: i._id,
                                Name: i.name,
                                Description: i.description, 
                                Status: i.status == 1 ? 'On' : 'Off'
                            }
                        ))
                        
                        setInitialEntries(itemEntries) 
                        setInitialState(initialItemStates) 
                        setQuizzies(quiz)
                    }
                })
        },[]
    )

    const handleAddQuiz = () => {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuiz}
                AddObjectName={props.AddObjectName}
            />
            <AddItem 
                status={addStatus}
                _state={initialState}
                entries={initialEntries}
            />
            <ListObj
                list={quizzies}
                template={ItemQuiz}
            />
        </div>
    )
}

export default SectionQuiz