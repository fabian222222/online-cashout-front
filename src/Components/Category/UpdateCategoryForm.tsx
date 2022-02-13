import React from 'react'
import { useForm } from "react-hook-form"
import { Category } from '../../Interfaces/Category/Category';
import { putCategory } from '../../Services/Categorie/putCategory';

const UpdateCategoryForm = (props:any) => {

    console.log(props);
    
    const { register, handleSubmit, formState:{ errors } } = useForm<Category>();

    return (
        <form onSubmit={handleSubmit(async (category) => {
            const getCategoryUpdated = await putCategory(category, 2);
            console.log(getCategoryUpdated);
        })}>
             <input placeholder="Name: " {...register("name", {
                required:true
            })}/>
            <input type="submit" />
        </form>
    )
}

export default UpdateCategoryForm