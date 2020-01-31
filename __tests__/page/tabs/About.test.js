import React from 'react'
import { render } from '@testing-library/react'
import About from '../../../src/pages/tabs/About'

describe('About renders without crashing', () => {
    it('About does not crash on render', () => {
        const about = render(<About />)
        expect(about).toBeTruthy()
    })
})