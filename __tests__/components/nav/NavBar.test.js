import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../../../src/components/nav/NavBar'

describe('NavBar renders without crashing', () => {
    it('NavBar does not crash on render', () => {
        const navBar = render(
            <Router>
                <NavBar />
            </Router>
        )
        expect(navBar).toBeTruthy()
    })
})