import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth'
import { Link } from 'react-router'
import SocailLogIn from '../Social/SocailLogIn'

const Register = () => {
    const { registerUser } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRegister = (data) => {
        registerUser(data.email, data.password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="flex flex-col items-center">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Welcome to Go-Parcel</h3>
                <p>Please Register</p>
            </div>

            <form onSubmit={handleSubmit(handleRegister)} className="w-full flex justify-center">
                <div className="card bg-base-100 w-lg shadow-2xl">
                    <div className="card-body">
                        <div className="space-y-4">
                            {/* email */}
                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    className="input w-full"
                                    placeholder="Email"
                                />
                                {errors.email?.type === 'required' && (
                                    <p className="text-red-500">Email is required</p>
                                )}
                            </div>

                            {/* password */}
                            <div>
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                        pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.*[^a-z0-9]).{6,}$/i,
                                    })}
                                    className="input w-full"
                                    placeholder="Password"
                                />

                                {errors.password?.type === 'required' && (
                                    <p className="text-red-500">Password is required</p>
                                )}

                                {errors.password?.type === 'pattern' && (
                                    <p className="text-red-500">
                                        Min 6 chars, include letter, number & special char
                                    </p>
                                )}
                            </div>

                            <button className="btn btn-neutral w-full">Register</button>
                            <p className='flex gap-1 mb-3 '>
                                <span>Already have an account, Please</span>
                                <Link className="text-blue-500" to='/login'>Login</Link>
                            </p>
                        </div>
                        <SocailLogIn></SocailLogIn>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default Register
