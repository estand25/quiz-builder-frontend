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

const SignUp = (props) => {
    const [username, setUserName] = useState('')
    const [password, setPasssword] = useState('')
    const [email, setEmail] = useState('')

    const sDispatch = useDispatch()
    const history = useHistory()

    const signUpUser = () => {
        const payload = {
            username: username,
            password: password,
            email: email
        }

        api.insertUser(payload)
            .then(res => {
                if(res.data.success === true){
                    var user = res.data.data    
                    payload.userId = user._id

                    sDispatch(auth.setUser(payload))

                    window.alert('User sign-up successfully !!')
                    history.push('/about')
                }
            }).catch(err => {
                console.log('signUpUser', err);
                window.alert(err)
            })
    }

    const cancelSignUp = () => {
        window.alert('User cancel sign up successfully !!')
        history.push('/about')
    }

    return (
        <Wrapper>
            <Title>Sign-Up</Title>
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
            <Label>Email:</Label>
            <Spacing>
                <InputText
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Spacing>
            <SuccessButton onClick={signUpUser}>Sign-Up</SuccessButton>
            <CancelButton onClick={cancelSignUp}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default SignUp