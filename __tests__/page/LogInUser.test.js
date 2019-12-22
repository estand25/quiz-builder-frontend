import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LogInUser from '../../src/pages/LogInUser'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Log In User renders without crashing', () => {
    it('Log In User does not crash on render', () => {
        const initialState = { 
            userId: '',
            userLoading: false,
            error: ''
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const logInUser = render(
            <Provider store={store}>
                <Router>
                    <LogInUser />
                </Router>
            </Provider>
        )
        expect(logInUser).toBeTruthy()
    })
})