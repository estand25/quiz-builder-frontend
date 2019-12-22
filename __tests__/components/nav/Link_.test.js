import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Link_ from '../../../src/components/nav/Link_'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Link_ renders without crashing', () => {
    it('Link_ does not crash on render', () => {
        const initialState = { 
            userId: '',
            userLoading: false,
            error: ''
        }
        const mockStore = configureStore()
        let store

        store = mockStore(initialState)

        const link_ = render(
            <Provider store={store}>
                <Router>
                    <Link_ />
                </Router>
            </Provider>
        )
        expect(link_).toBeTruthy()
    })
})