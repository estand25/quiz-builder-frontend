import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AddObj, ListObj, Item, AddItem } from '../modals'
import { question } from '../../../actions'

import api from '../../../api'

import { Constant } from '../question'

const SectionQuestion = (props) => {
    const qDispatch = useDispatch()
    const qState = useSelector(state => state.question)
    const quState = useSelector(state => state.quiz)
    const { AddObjectName } = props
    const [addStatus, setAddStatus] = useState(false)
    const [questions, setQuestions] = useState([])
    const [quizNameList, setQuizNameList] = useState(quState.allQuiz ? quState.allQuiz.map((i) => i.Name) : [])
    const [quizList, setQuizList] = useState([])

    const { itemEntries, initialItemStates } = Constant   

    var entries = [...itemEntries]
    entries.push(['Quiz', ['Option', quizNameList]])
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
                                Quiz: i.quizName
                            }
                        ))         

                        setQuestions(question)

                        if(quizNameList.length >= 0){
                            api.getAllQuiz()
                                .then(q => {
                                    if(q.data.success === true) {                                        
                                        var quizName_ = q.data.data.map(i => i.name)
                                        var quizList_ = q.data.data.map(i => (
                                            {
                                                _id:i._id,
                                                name: i.name,
                                            }
                                        ))
                                    }
                                    setQuizNameList(quizName_)
                                    setQuizList(quizList_)
                                })
                        }
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

    const handleModifyQuestion = (state, setOnEdit) => {        
        const {_id, Question, Options, Answer, Status, Point, Order, Quiz} = state

        var _answer = Object.entries(Options).map(i => {
            if(Object.entries(Object.values(i)[1])[0][1] == Answer){
                return Object.entries(Object.values(i)[1])[0][0]
            }
        }).filter(i => i != undefined)

        var _status = Status == 'On' ? 1 : 0
        
        var payload = {
            answer: _answer[0],
            options: Options,
            status: _status,
            question: Question,
            order: parseInt(Order),
            point: parseInt(Point),
            quizName: Quiz,
            quizId: quizList.filter(i => i.name == Quiz)[0]._id
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

    const handleNewQuestion = (state) => {
        
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