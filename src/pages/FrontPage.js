import React from 'react'
import styled from 'styled-components'
import { LogIn } from '../components/section/account'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const FrontPage = () => {
    return (
        <Wrapper>
            <div>Front Page</div>
            <LogIn
                Title={'Log-In'}
                AcceptLblBtn={'Log-In'}
            />
        </Wrapper>
    )
}

export default FrontPage