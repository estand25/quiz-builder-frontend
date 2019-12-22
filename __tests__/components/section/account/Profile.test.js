import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Profile from '../../../../src/components/section/account/Profile'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Profile renders without crashing', () => {
    it('Profile does not crash on render', () => {
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

        const profile = render(
            <Provider store={store}>
                <Router>
                    <Profile />
                </Router>
            </Provider>
        )
        expect(profile).toBeTruthy()
    })
})