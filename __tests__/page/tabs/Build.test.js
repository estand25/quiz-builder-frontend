import React from 'react'
import { render } from '@testing-library/react'
import Build from '../../../src/pages/tabs/Build'

describe('Build renders without crashing', () => {
    it('Build does not crash on render', () => {
        const build = render(<Build />)
        expect(build).toBeTruthy()
    })
})