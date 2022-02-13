import React from 'react'
import { Navigate } from 'react-router-dom'
import { Category } from '../../Interfaces/Category/Category'
import { deleteCategory } from '../../Services/Categorie/deleteCategory'

const CategorySingle = (props:Category) => {

    const deleteAction = (async() => {
        const deleteCategoryApi = await deleteCategory(props.id)
        console.log(deleteCategoryApi);
    })

    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.createdAt}</p>
            <button onClick={
                (() => {
                    deleteAction();
                })
            }>delete category</button>
            {/* <button onClick={
                (() => {
                    <Navigate to={`category/update/${props.id}`} ></Navigate>
                })
            }>Update</button> */}
        </div>
    )
}

export default CategorySingle