import React from 'react';
import logo from '../assets/logo-1-primary.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to="/">
            <div>
                <img className='w-32 h-20' src={logo} alt="" />
            </div>
        </Link>
    );
};

export default Logo;