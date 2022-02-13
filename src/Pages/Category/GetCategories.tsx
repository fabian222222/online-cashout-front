import React, { useState, useEffect } from 'react'
import { Category } from '../../Interfaces/Category/Category'
import { getCategories } from '../../Services/Categorie/getCategories'
import CategorySingle from '../../Components/Category/CategorySingle'

const GetCategories = () => {

    const [categories, setCategories] = useState([])

    const getCategoriesApi = ( async () => {
        const categoriesData = await getCategories();
        setCategories(categoriesData as Category[])
    })

    useEffect(() => {
        getCategoriesApi()
    }, [])

    useEffect(() => {
        console.log(categories);
    }, [categories])
    
    if (categories.length === 0){
        return(
            <div>
                wait
            </div>
        )
    } else {
        return (
            <div>
                <p>categoies</p>
                {categories.map((category:Category) => {
                    return (
                        <CategorySingle key={category.id} id={category.id} name={category.name} createdAt={category.createdAt}></CategorySingle>
                    )
                })}
            </div>
        )
    }
}

export default GetCategories