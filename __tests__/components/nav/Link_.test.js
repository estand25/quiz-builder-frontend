import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Link_ from '../../../src/components/nav/Link_'

describe('Link_ renders without crashing', () => {
    it('Link_ does not crash on render', () => {
        const link_ = render(
            <Router>
                <Link_ />
            </Router>
        )
        expect(link_).toBeTruthy()
    })
})