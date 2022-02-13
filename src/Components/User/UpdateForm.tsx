import React from 'react';
import { useForm } from "react-hook-form";
import { User } from '../../Interfaces/User/User';
import { putUser } from '../../Services/User/putUser';

const UpdateForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<User>();

    return (
        <div>
            <form onSubmit={handleSubmit(async (form) => {
                // console.log(form);
                const update = await putUser(form, 5)
                console.log(update);
            })}>
                <input placeholder="Email: " {...register("email", {
                    required:false
                })}/>
                {errors.email?.type === "required" && "email is required"}
                <br />
                <input placeholder="username: " {...register('username',{
                    required:false
                })}/>
                {errors.username?.type === "minLength" && "username need to be longer than 5 caraters"}
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateForm;
