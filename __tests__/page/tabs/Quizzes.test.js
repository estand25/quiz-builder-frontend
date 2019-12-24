import React from 'react'
import { render } from '@testing-library/react'
import Quizzes from '../../../src/pages/tabs/Quizzes'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Quizzes renders without crashing', () => {
    it('Quizzes does not crash on render', () => {
        const initialState = { 
            name: '',
            description: '',
            status: false  
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const quizzes = render(
            <Provider store={store}>
                <Router>   
                    <Quizzes />
                </Router>
            </Provider>
        )
        expect(quizzes).toBeTruthy()
    })
})