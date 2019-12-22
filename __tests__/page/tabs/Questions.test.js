import React from 'react'
import { render } from '@testing-library/react'
import Questions from '../../../src/pages/tabs/Questions'

describe('Questions renders without crashing', () => {
    it('Questions does not crash on render', () => {
        const questions = render(<Questions />)
        expect(questions).toBeTruthy()
    })
})