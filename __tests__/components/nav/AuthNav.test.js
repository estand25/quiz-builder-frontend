import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthNav from '../../../src/components/nav/AuthNav'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('AuthNav renders without crashing', () => {
    it('AuthNav does not crash on render', () => {
        const auth = {
            userId: '',
            userLoading: false,
            error: ''
        }

        const initialState = {
            auth: auth 
        }

        const mockStore = configureStore()
        let store = mockStore(initialState)
        
        const authNav = render(
            <Provider store={store}>
                <Router>
                    <AuthNav />
                </Router>
            </Provider>
        )
        expect(authNav).toBeTruthy()
    })
})