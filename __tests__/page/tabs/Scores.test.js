import React from 'react'
import { render } from '@testing-library/react'
import Scores from '../../../src/pages/tabs/Scores'

describe('Scores renders without crashing', () => {
    it('Scores does not crash on render', () => {
        const scores = render(<Scores />)
        expect(scores).toBeTruthy()
    })
})