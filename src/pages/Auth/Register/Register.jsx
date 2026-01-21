import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../Hooks/useAuth'

const Register = () => {

    const { registerUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            }
            )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)} >
                <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>
                    }
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[0-9])(?=.*[^a-z0-9]).{6,}$/i })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === "required" && <p className='text-red-500'>password is required</p>
                    }
                    {
                        errors.password?.type === "pattern" && <p className='text-red-500'>Min 6 chars, include letter, number & special char</p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Register     