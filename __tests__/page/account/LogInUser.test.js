import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LogInUser from '../../../src/pages/account/LogInUser'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Log In User renders without crashing', () => {
    it('Log In User does not crash on render', () => {
        const auth = {
            userId: '',
            userLoading: false,
            error: '',
            email: '',
            username: '',
            password: ''
        }
        
        const initialState = { 
            auth: auth
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