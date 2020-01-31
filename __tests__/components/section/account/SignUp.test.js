import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import SignUp from '../../../../src/components/section/account/SignUp'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('SignUp renders without crashing', () => {
    it('SignUp does not crash on render', () => {
        const initialState = { 
            userId: '',
            userLoading: false,
            error: '',
            email: ''
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const signUp = render(
            <Provider store={store}>
                <Router>
                    <SignUp />
                </Router>
            </Provider>
        )
        expect(signUp).toBeTruthy()
    })
})