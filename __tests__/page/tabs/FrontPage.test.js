import React from 'react'
import { render } from '@testing-library/react'
import FrontPage from '../../../src/pages/tabs/FrontPage'

describe('FrontPage renders without crashing', () => {
    it('FrontPage does not crash on render', () => {
        const frontPage = render(<FrontPage />)
        expect(frontPage).toBeTruthy()
    })
})