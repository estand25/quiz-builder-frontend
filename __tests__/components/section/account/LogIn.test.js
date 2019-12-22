import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LogIn from '../../../../src/components/section/account/LogIn'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('LogIn renders without crashing', () => {
    it('LogIn does not crash on render', () => {
        const initialState = { 
            userId: '',
            userLoading: false,
            error: ''
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const logIn = render(
            <Provider store={store}>
                <Router>
                    <LogIn />
                </Router>
            </Provider>
        )
        expect(logIn).toBeTruthy()
    })
})