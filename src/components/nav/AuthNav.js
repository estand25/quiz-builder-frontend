import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AuthNav = (props) => {
    const aState = useSelector(state => state.auth)

    if(aState.userId){
        return (
            <div>
                <Link to='/logOut' className='nav-link'>Log-Out</Link>
                <Link to='/profile' className='nav-link'>Profile</Link>
            </div>
        ) 
    } else {
        return (
            <div>
                <Link to='/logIn' className='nav-link'>Log-In</Link>
                <Link to='/signUp' className='nav-link'>Sign-Up</Link>
            </div>
        )
    }
}

export default AuthNav