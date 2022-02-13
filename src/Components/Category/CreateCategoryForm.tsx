import React from 'react';
import { useForm } from "react-hook-form"
import { Category } from '../../Interfaces/Category/Category';
import { createCategory } from '../../Services/Categorie/createCategory';

const CreateCategoryForm = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm<Category>();

    return (
        <form onSubmit={handleSubmit(async (category) => {
            const today = new Date()
            const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
            category = {...category, "createdAt" : date}
            
            const getCategoryCreated = await createCategory(category);
            console.log(getCategoryCreated);
        })}>
             <input placeholder="Name: " {...register("name", {
                required:true
            })}/>
            <input type="submit" />
        </form>
    );
};

export default CreateCategoryForm;
