import React from 'react'
import { render } from '@testing-library/react'
import Scores from '../../../src/pages/tabs/Scores'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Scores renders without crashing', () => {
    it('Scores does not crash on render', () => {
        const initialState = { 
            score: {
                title: '',
                questionCount: 0
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

        const scores = render(
            <Provider store={store}>
                <Router>
                    <Scores />
                </Router>
            </Provider>
        )
        expect(scores).toBeTruthy()
    })
})