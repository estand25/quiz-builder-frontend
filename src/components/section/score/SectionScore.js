import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj, Item, AddItem } from '../modals'
import { score } from '../../../actions'

import api from '../../../api'

import { Constant } from '../score'

const SectionScore = (props) => {
    const sDispatch = useDispatch()
    const { AddObjectName } = props  
    const [addStatus, setAddStatus] = useState(false)
    const [scores, setScores] = useState([])
    
    const { itemEntries, initialItemStates } = Constant


    useEffect(
        () => {
            api.getAllScore()
                .then(s => {
                    if(s.data.success === true){
                        var scores = s.data.data.map(i => (
                            {
                                _id: i._id,
                                score: i.score,
                                NonAnswered: i.nonAnswered
                            }
                        ))
                        
                        setScores(scores)
                    }
                })
        }
    )

    const onHandleAddScore = () => {
        sDispatch(score.setTitle(''))
        sDispatch(score.setQuestionCount(0))
    }

    const handleDeleteScore = () => {}
    const handleModifyScore = () => {}
    const handleNewScore = () => {}

    return (
        <div>
            <AddObj
                onAddHandle={onHandleAddScore}
                AddObjectName={AddObjectName}
            />
            <AddItem 
                status={addStatus}
                setAddStatus={setAddStatus}
                _state={initialItemStates}
                itemNew={handleNewScore}
                entries={itemEntries}
            />
            <ListObj
                list={scores}
                template={Item}
                itemDelete={() => handleDeleteScore}
                itemModify={() => handleModifyScore}
                entries={itemEntries}
            />
        </div>
    )
}

export default SectionScore