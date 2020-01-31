import React from 'react'
import { render } from '@testing-library/react'
import Preview from '../../../src/pages/tabs/Preview'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Preview renders without crashing', () => {
    it('Preview does not crash on render', () => {
        const initialState = { 
            question: {   
                name: '',
                qOption: '',
                qOptions: [],
                addStatus: false,
                quizList: [],
                quizSelection: '',
                correctAnswer: '',
                point: 0,
                order: 0,
                status: '',
                questions: 0 ,
                previewList: []
            },
            buildlist: {
                
                previewList: [],
                quizzies: [],
                questions: [],
                buildListFlag: false
            },
            quiz: {
                allQuiz: []
            },
            auth: {
                userId: '',
                userLoading: false,
                error: '',
                email: '',
                username: '',
                password: ''
            }
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const preview = render(
            <Provider store={store}>
                <Router>
                    <Preview />
                </Router>
            </Provider>
        )

        expect(preview).toBeTruthy()
    })
})