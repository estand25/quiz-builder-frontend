import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../../../src/components/nav/NavBar'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('NavBar renders without crashing', () => {
    it('NavBar does not crash on render', () => {
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
        
        const navBar = render(
            <Provider store={store}>
                <Router>
                    <NavBar />
                </Router>
            </Provider>
        )
        expect(navBar).toBeTruthy()
    })
})