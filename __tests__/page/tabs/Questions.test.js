import React from 'react'
import { render } from '@testing-library/react'
import Questions from '../../../src/pages/tabs/Questions'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Questions renders without crashing', () => {
    it('Questions does not crash on render', () => {
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
                questions: 0 
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

        const questions = render(
            <Provider store={store}>
                <Router>
                    <Questions />
                </Router>
            </Provider>
        )
        expect(questions).toBeTruthy()
    })
})