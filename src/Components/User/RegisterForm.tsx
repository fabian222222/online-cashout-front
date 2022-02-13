import React from 'react';
import { useForm } from "react-hook-form"
import { User } from '../../Interfaces/User/User';
import { createUser } from '../../Services/User/createUser'

const RegisterForm = () => {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm<User>();

    return (
        <form onSubmit={handleSubmit(async (form) => {
            const createUserAction = await createUser(form);
            console.log(createUserAction);
            
        })}>
            <input placeholder="Email: " {...register("email", {
                required:true
            })}/>
            {errors.email?.type === "required" && "email is required"}
            <br />
            <input placeholder="username: " {...register('username',{
                required:true,
                minLength:5
            })}/>
            {errors.username?.type === "minLength" && "username need to be longer than 5 caraters"}
            <br />
            <input placeholder="Password: " {...register('password',{
                required:true,
                minLength:8,
            })}/>
            {errors.password?.type === "minLength" && "the password length need to be above 8"}
            <br />
            <input placeholder="Confirm password: " {...register("confirmPassword",{
                required:true,
                minLength:8,
                validate: (value:string) => value === watch("password") || "The password does not match"
            })}/>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <br />
            <input type="submit" />
        </form>
    );
};

export default RegisterForm;
