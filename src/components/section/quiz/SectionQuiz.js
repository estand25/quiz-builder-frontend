import React, { useEffect, useState } from 'react'
import { AddObj, ListObj, Item, AddItem, ModifyItem } from '../modals'
import api from '../../../api'

import ItemQuiz from './ItemQuiz'

const SectionQuiz = (props) => {
    const [addStatus, setAddStatus] = useState(false)

    const [quizzies, setQuizzies] = useState([])
    const [modifyQuiz, setModifyQuiz] = useState('')

    const [initialState, setInitialState] = useState({})
    const [initialEntries, setInitialEntries] = useState({})

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

                        var item = {
                            Name: 'InputText',
                            Description: 'InputText',
                            Status: ['Option', ['On','Off']]
                        }

                        const itemEntries = Object.entries(item)

                        const itemValues = itemEntries.map((entries) => {
                            return (
                                entries[0]
                            )
                        })
                    
                        var _state = {}
                    
                        for(var c=0; c < itemValues.length; c++){
                            _state[itemValues[c]] = ''
                        }
                        
                        setInitialEntries(itemEntries)
                        setInitialState(_state)
                        setModifyQuiz(item)
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
                item={modifyQuiz}
                modifyTemplate={ModifyItem}
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