import React from 'react'
import { Category } from '../../Interfaces/Category/Category'

const CategorySingle = (props:Category) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.createdAt}</p>
        </div>
    )
}

export default CategorySingle