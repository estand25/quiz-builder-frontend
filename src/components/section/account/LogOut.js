import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import api from '../../../api'
import { auth } from '../../../actions'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Spacing = styled.div`
    padding: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 15px;
`

const LogIn = (props) => {
    const sDispatch = useDispatch()
    const history = useHistory()

    const  logOutUser = () => {
        const payload = {
            username: username,
            password: password
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