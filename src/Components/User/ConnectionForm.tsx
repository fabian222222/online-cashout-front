import React from 'react';
import { useForm } from "react-hook-form"
import { User } from '../../Interfaces/User/User';
import { connection } from '../../Services/User/connection'

const ConnectionForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<User>();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            const getUserResponse = await connection(form.email, form.password);
            localStorage.setItem('token', getUserResponse.token)
            console.log(getUserResponse);
        })}>
            <input placeholder="Email: " {...register("email", {
                required:true
            })}/>
            {errors.email?.type === "required" && "email is required"}
            <br />
            <input placeholder="Password: " {...register('password',{
                required:true,
                minLength:8,
            })}/>
            {errors.password?.type === "minLength" && "the password length need to be above 8"}
            <br />
            <input type="submit" />
        </form>
    );
};

export default ConnectionForm;
