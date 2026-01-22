import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocailLogIn from '../Social/SocailLogIn';

const Login = () => {

    const { signInUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (


        <div className="flex flex-col items-center">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">Welcome Back to Go-Parcel</h3>
                <p>Please Login</p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className="w-full flex justify-center">

                <div className="card bg-base-100 w-lg shadow-2xl">
                    <div className="card-body">

                        <div className="space-y-4">

                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="input w-full"
                                    placeholder="Email"
                                />
                                {errors.email?.type === 'required' && (
                                    <p className="text-red-500">Email is required</p>
                                )}
                            </div>

                            <div>
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    className="input w-full"
                                    placeholder="Password"
                                />
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-500">Password is required</p>
                                )}
                            </div>

                            <div>
                                <a className="link link-hover">Forgot password?</a>
                            </div>

                            <button className="btn btn-neutral w-full">
                                Login
                            </button>
                            <p className='flex gap-1 mb-3 '>
                                <span>Don't have an account? Please
                                </span>
                                <Link className="text-blue-500" to='/register'>Register</Link>
                            </p>

                        </div>
                        <SocailLogIn></SocailLogIn>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Login