import React from 'react'
import styled from 'styled-components'
import { SignUp } from '../../components/section/account'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const SignUpUser = () => {
    return (
        <Wrapper>
            <SignUp />
        </Wrapper>
    )
}

export default SignUpUser