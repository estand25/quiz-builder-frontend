import React from 'react'
import styled from 'styled-components'
import { Profile } from '../../components/section/account'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const ProfileUser = () => {
    return (
        <Wrapper>
            <Profile />
        </Wrapper>
    )
}

export default ProfileUser