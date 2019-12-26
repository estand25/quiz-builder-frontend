import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AddObj, ListObj } from '../modals'
import { quiz } from '../../../actions'

import api from '../../../api'
import { ItemQuiz, AddQuiz, ModifyQuiz } from '../quiz'

const SectionQuiz = (props) => {
    const qDispatch = useDispatch()
    const [addStatus, setAddStatus] = useState(false)
    const [quizzies, setQuizzies] = useState([])
    const [modifyQuiz, setModifyQuiz] = useState('')

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
            <AddQuiz 
                status={addStatus}
                item={modifyQuiz}
                modifyTemplate={ModifyQuiz}
            />
            <ListObj
                list={quizzies}
                template={ItemQuiz}
            />
        </div>
    )
}

export default SectionQuiz