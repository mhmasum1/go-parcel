import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth';

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


        <div>
            <div>
                <h3 className='text-2xl font-bold'>Welcome to Go-Parcel</h3>
                <p>Please Login</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                            {errors.email?.type === "required" && <p className='text-red-500'>Email is required </p>}
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="input" placeholder="Password" />
                            {errors.password?.type === "required" && <p className='text-red-500'>password is required </p>}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login