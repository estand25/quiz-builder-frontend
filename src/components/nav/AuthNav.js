import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const AuthNav = (props) => {
    const aState = useSelector(state => state.auth)
    
    console.log('AuthNav', aState);
    console.log('AuthNav', aState.userId);

    if(aState.userId){
        return (
            <div>
                <Link to='/logOut' className='nav-link'>Log-Out</Link>
            </div>
        ) 
    } else {
        return (
            <div>
                <Link to='/logIn' className='nav-link'>Log-In</Link>
            </div>
        )
    }
}

export default AuthNav