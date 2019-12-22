import React from 'react'
import styled from 'styled-components'
import { LogOut } from '../components/section/account'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const LogOutUser = () => {
    return (
        <Wrapper>
            <LogOut />
        </Wrapper>
    )
}

export default LogOutUser