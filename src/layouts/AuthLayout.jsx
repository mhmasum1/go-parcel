import React from 'react'
import authImg from '../assets/authImage.png'
import Logo from '../logo/Logo'
import { Outlet } from 'react-router'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>

            <div className='flex'>
                {/* leftside */}
                <div className='flex-1 items-center justify-center'>
                    <Outlet></Outlet>
                </div>
                {/* rightside */}
                <div className='flex-1 items-center justify-center'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout