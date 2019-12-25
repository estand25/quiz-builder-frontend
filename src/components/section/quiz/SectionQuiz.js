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
                                name: i.name,
                                description: i.description, 
                                status: i.status == 1 ? 'On' : 'Off'
                            }
                        ))

                        var item = {
                            _id: 'Label',
                            name: 'InputText',
                            description: 'InputText',
                            status: ['Option', [0,1]]
                        }

                        setModifyQuiz(item)
                        setQuizzies(quiz)
                    }
                })
        }
    )

    const handleAddQuiz = () => {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
        console.log('handleAddQuiz', currentStatus);
        

        // setAddStatus(!AddStatus)
        // qDispatch(quiz.setName(''))
        // qDispatch(quiz.setDescription(''))
        // qDispatch(quiz.setStatue(false))
    }

    return (
        <div>
            <AddObj
                onAddHandle={handleAddQuiz}
                AddObjectName={props.AddObjectName}
            />
            {/* <AddQuiz 
                status={addStatus}
                item={modifyQuiz}
                modifyTemplate={ModifyQuiz}
                template={ItemQuiz}
            /> */}
            <ListObj
                list={quizzies}
                template={ItemQuiz}
            />
        </div>
    )
}

export default SectionQuiz