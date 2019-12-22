import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LogOut from '../../../../src/components/section/account/LogOut'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('LogOut renders without crashing', () => {
    it('LogOut does not crash on render', () => {
        const initialState = { 
            userId: '',
            userLoading: false,
            error: '',
            username: '',
            password: ''
        }

        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const logOut = render(
            <Provider store={store}>
                <Router>
                    <LogOut />
                </Router>
            </Provider>
        )
        expect(logOut).toBeTruthy()
    })
})