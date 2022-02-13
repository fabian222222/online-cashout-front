import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form"
import { User } from '../../Interfaces/User/User';
import { connection } from '../../Services/User/connection'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../Providers/UserProvider';
import { useContext } from 'react';
import { getUserEmail } from '../../Services/User/getUserEmail';


const ConnectionForm = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm<User>();
    const [logResponse, setLogResponse] = useState("")

    const {setUser} = useContext(UserContext)

    const searchUserByEmail = (async( email:string) => {
        const user = await getUserEmail(email)
        return user
    })

    useEffect(() => {
        if (logResponse.length > 0){
            toast(logResponse)
        }
    }, [logResponse])
    
    return (
        <Container>
            <ImageContainer>
                <Image src="assets/images/register.jpeg" alt="" />
            </ImageContainer>
            <Form onSubmit={handleSubmit(async (form) => {

                const getUserResponse = await connection(form.email, form.password);
                if (getUserResponse.code === 401) {
                    setLogResponse(getUserResponse.message)
                } else {
                    setLogResponse("You can now connect")
                    const user = await searchUserByEmail(form.email)
                    setUser(user[0])
                    localStorage.setItem('token', getUserResponse.token)
                }

            })}>
                <ToastContainer />
                <EmailInput placeholder="Email: " {...register("email", {
                    required:true
                })}/>
                {errors.email?.type === "required" && "email is required"}
                <br />
                <PasswordInput placeholder="Password: " {...register('password',{
                    required:true,
                    minLength:8,
                })}/>
                {errors.password?.type === "minLength" && "the password length need to be above 8"}
                <br />
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
    padding : 0 50px;
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
`
const EmailInput = styled.input`
    margin-bottom:10px;
    height:25px;
    padding:5px 10px;
    border-radius:5px;
    border:none;
`
const PasswordInput = styled.input`
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

export default ConnectionForm;
