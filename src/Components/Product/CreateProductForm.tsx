import React from 'react';
import { useForm } from "react-hook-form"
import { Product } from '../../Interfaces/Product/Product';
import { createProduct } from '../../Services/Product/createProduct';

const CreateProductForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<Product>();

    return (
        <form onSubmit={handleSubmit(async (product) => {
            const getProductCreated = await createProduct(product);
        })}>
             <input placeholder="Name: " {...register("name", {
                required:true
            })}/>
             <input type="file"  {...register("file", {
                required:true
            })}/>
             <input placeholder="price: " {...register("price", {
                required:true
            })}/>
            <input type="submit" />
        </form>
    );
};

export default CreateProductForm;
