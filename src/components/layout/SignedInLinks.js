import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New File</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'className='btn btn-floating gray lighten-1'>MTB</NavLink></li>
        </ul>
    )
}

export default SignedInLinks