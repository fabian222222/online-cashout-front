import React from 'react';
import { useForm } from "react-hook-form"
import { Promotion } from '../../Interfaces/Promotion/Promotion';
import { createPromotion } from '../../Services/Promotion/createPromotion';

const CreatePromotionForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<Promotion>();

    return (
        <div>
            <form onSubmit={handleSubmit(async (promotion) => {
                const getPromotionCreated = await createPromotion(promotion);
                console.log(getPromotionCreated);
            })}>
                <input placeholder="Amount: " {...register("amount")}/>
                <br />
                <p>pourcent ?</p>
                <input type="radio" value="true" id="yes" {...register("pourcent")}/>
                <label htmlFor="yes">yes</label>
                <input type="radio" value="false" id="no" {...register("pourcent")}/>
                <label htmlFor="no">no</label>
                <br />
                <br />
                <p>fixed ?</p>
                <input type="radio" value="true" id="yes2" {...register("fixed")}/>
                <label htmlFor="yes2">yes</label>
                <input type="radio" value="false" id="no2" {...register("fixed")}/>
                <label htmlFor="no2">no</label>
                <br />
                <br />
                <input placeholder="Description: " {...register("description")}/>
                <br />
                <input placeholder="Serial code: " {...register("serial")}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default CreatePromotionForm;
