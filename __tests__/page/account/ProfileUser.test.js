import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ProfileUser from '../../../src/pages/account/ProfileUser'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Profile User renders without crashing', () => {
    it('Profile User does not crash on render', () => {
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

        const profileUser = render(
            <Provider store={store}>
                <Router>
                    <ProfileUser />
                </Router>
            </Provider>
        )
        expect(profileUser).toBeTruthy()
    })
})