import React from 'react'
import { render } from '@testing-library/react'
import Preview from '../../../src/pages/tabs/Preview'

describe('Preview renders without crashing', () => {
    it('Preview does not crash on render', () => {
        const preview = render(<Preview />)
        expect(preview).toBeTruthy()
    })
})