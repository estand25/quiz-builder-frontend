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

const DeleteButton = styled.button.attrs({
    className: 'btn btn-danger',
})`
    margin: 15px 15px 15px 15px;
`

const Profile = (props) => {
    const sSelector = useSelector(state => state.auth)
    const sDispatch = useDispatch()
    const history = useHistory()

    const [username, setUserName] = useState(sSelector.username)
    const [password, setPasssword] = useState(sSelector.password)
    const [email, setEmail] = useState(sSelector.email)

    const updateProfile = () => {
        const payload = {
            username: username,
            password: password,
            email: email
        }

        api.updateUserById(payload, sSelector.userId)
            .then(res => {
                if(res.data.success === true){
                    var user = res.data.data    
                    payload.userId = user._id

                    sDispatch(auth.setUser(payload))

                    window.alert('User profile update successfully !!')
                    history.push('/about')
                }
            }).catch(err => {
                console.log('updateProfile', err);
                window.alert(err)
                setUserName('')
                setEmail('')
                setPasssword('')
            })
    }

    const cancel = () => {
        window.alert('User exit profile successfully !!')
        history.push('/about')
    }

    const deleteProfile = () => {
        const payload = {
            username: '',
            password: '',
            email: '',
            userId: ''
        }

        api.deleteUserById(sSelector.userId)
            .then(res => {
                if(res.data.success === true){
                    sDispatch(auth.setUser(payload))

                    window.alert('Profile deleted successfully !!')
                    history.push('/about')
                }
            }).catch(err => {
                console.log('updateProfile', err);
                window.alert(err)
            })
    }

    return (
        <Wrapper>
            <Title>Profile</Title>
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
            <SuccessButton onClick={updateProfile}>Update Profile</SuccessButton>
            <CancelButton onClick={cancel}>Cancel</CancelButton>
            <DeleteButton onClick={deleteProfile}>Delete Profile</DeleteButton>
        </Wrapper>
    )
}

export default Profile