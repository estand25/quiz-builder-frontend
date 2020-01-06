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

const SuccessButton = styled.button.attrs({
    className: 'btn btn-success',
})`
    margin: 15px 15px 15px 15px;
`

const CancelButton = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 15px;
`

const LogIn = (props) => {
    const [username, setUserName] = useState('')
    const [password, setPasssword] = useState('')
    const sDispatch = useDispatch()
    const history = useHistory()

    const signInUser = () => {
        const payload = {
            username: username,
            password: password
        }

        api.SignInUser(payload)
            .then(res => {
                if(res.data.success === true){
                    var user = res.data.data    
                    payload.userId = user._id
                    payload.email = user.email

                    sDispatch(auth.setUser(payload))

                    window.alert('User logged in successfully !!')
                    history.push('/about')
                }
            }).catch(err => {
                console.log('signInUser', err);
                window.alert(err)
            })
        // sDispatch(auth.logIn(username, password))
    }

    const cancelSignIn = () => {
        window.alert('User cancel logged in successfully !!')
        history.push('/about')
    }

    return (
        <Wrapper>
            <Title>Log-In</Title>
            <Label>User Name:</Label>
            <Spacing>
                <InputText
                    type="text"
                    value={username}
                    onChange={un => setUserName(un.target.value)}
                />
            </Spacing>
            <Label>Password:</Label>
            <Spacing>
                <InputText
                    type="password"
                    value={password}
                    onChange={p => setPasssword(p.target.value)}
                />
            </Spacing>
            <SuccessButton onClick={signInUser}>Log-In</SuccessButton>
            <CancelButton onClick={cancelSignIn}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default LogIn