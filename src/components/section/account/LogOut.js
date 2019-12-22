import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import api from '../../../api'
import { auth } from '../../../actions'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 15px;
`

const LogIn = (props) => {
    const sDispatch = useDispatch()
    const cState = useSelector(state => state.auth)
    const history = useHistory()

    const  logOutUser = () => {
        const payload = {
            username: cState.username,
            password: cState.password
        }

        api.SignOutUser(payload)
            .then(res => {
                if(res.data.success === true){                    
                    payload.userId = ''
                    payload.username = ''
                    payload.password = ''
                    
                    sDispatch(auth.setUser(payload))

                    window.alert('User logged out in successfully !!')
                    history.push('/about')
                }
            }).catch(err => {
                console.log('SignInUser', err);
                window.alert(err)
            })
    }

    return (
        <Wrapper>
            <Button onClick={logOutUser}>Log-Out</Button>
        </Wrapper>
    )
}

export default LogIn