import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const AuthNav = (props) => {
    const aState = useSelector(state => state)

    if(aState.userLoading){
        return (
            <div>LogIn</div>
        ) 
    } else {
        return (
            <div>
                <Link to='logIn' className='nav-link'>Login</Link>
            </div>
        )
    }
}

export default AuthNav