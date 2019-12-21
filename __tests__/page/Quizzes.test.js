import React from 'react'
import { render } from '@testing-library/react'
import Quizzes from '../../src/pages/Quizzes'

describe('Quizzes renders without crashing', () => {
    it('Quizzes does not crash on render', () => {
        const quizzes = render(<Quizzes />)
        expect(quizzes).toBeTruthy()
    })
})