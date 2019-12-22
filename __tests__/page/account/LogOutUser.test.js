import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import LogOutUser from '../../../src/pages/account/LogOutUser'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Log Out User renders without crashing', () => {
    it('Log Out User does not crash on render', () => {
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

        const logOutUser = render(
            <Provider store={store}>
                <Router>
                    <LogOutUser />
                </Router>
            </Provider>
        )
        expect(logOutUser).toBeTruthy()
    })
})