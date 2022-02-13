import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import { Product } from '../../Interfaces/Product/Product';
import { createProduct } from '../../Services/Product/createProduct';
import styled from 'styled-components'
import { getCategories } from '../../Services/Categorie/getCategories';
import { Category } from '../../Interfaces/Category/Category';
import { createProductCategory } from './../../Services/ProductCategory/createProductCategory'

const CreateProductForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<Product>();

    const [categories, setCategories] = useState([])
    const [filter, setFilter] = useState("")

    const getCategoriesAction = ( async () => {
        const getCategoriesApi = await getCategories()
        setCategories(getCategoriesApi)
    })

    useEffect(() => {
        getCategoriesAction()
    }, [])

    return (
        <Container>
            <ImageContainer>
                <Image src="/assets/images/product.jpg" alt="" />
            </ImageContainer>
            <Form onSubmit={handleSubmit(async (product) => {
                const getProductCreated = await createProduct(product);
                product.categories.forEach(async(category) => {
                    const addCategoriesToProduct = await createProductCategory(category, getProductCreated.id)
                });
            })}>
                <Input placeholder="Name: " {...register("name", {
                    required:true
                    })}/>
                <Input type="file"  {...register("file", {
                    required:true
                    })}/>
                <Input placeholder="price: " {...register("price", {
                    required:true
                })}/>
                <Input placeholder="filter: " onInput={((event:any) => {
                    setFilter(event.target.value)
                })}/>
                {categories.map((category:Category) => {
                    if (filter.length > 0 && category.name.includes(filter)) {
                        return(
                            <div key={category.id}>
                                <Input type="checkbox" id={category.name} value={category.id} {...register("categories", {
                                    required:false
                                })}/>
                                <label htmlFor={category.name}>{category.name}</label>
                            </div>
                        )
                    } else if (filter.length ===0){
                        return (
                            <div key={category.id}>
                                <Input type="checkbox" id={category.name} value={category.id} {...register("categories", {
                                    required:false
                                })}/>
                                <label htmlFor={category.name}>{category.name}</label>
                            </div>
                        )
                    }
                })}
                <Submit type="submit" />
            </Form>
        </Container>
    );
};

const Container  = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:100vh;
`
const ImageContainer = styled.div`
    width:50%;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:contain;
`
const Form = styled.form`
    width:50%;
    background-color : #8a7ecc;
    display:flex;
    flex-direction:column;
    padding:20px 30px;
    border-radius:7px;
    margin:0 20px;
`
const Input = styled.input`
    margin-bottom:10px;
    height:25px;
    padding:5px 10px;
    border-radius:5px;
    border:none;
`
const Submit = styled.input`
    width: fit-content;
    padding: 5px 10px;
    background-color: #e0613b;
    border:none;
    color:white;
    cursor:pointer;
`

export default CreateProductForm;
