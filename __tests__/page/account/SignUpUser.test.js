import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SignUpUser from '../../../src/pages/account/SignUpUser'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Sign Up User renders without crashing', () => {
    it('Sign Up User does not crash on render', () => {
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

        const signUpUser = render(
            <Provider store={store}>
                <Router>
                    <SignUpUser />
                </Router>
            </Provider>
        )
        expect(signUpUser).toBeTruthy()
    })
})