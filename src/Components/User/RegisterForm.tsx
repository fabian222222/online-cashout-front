import React, {useState} from 'react';
import { useForm } from "react-hook-form"
import { User } from '../../Interfaces/User/User';
import { createUser } from '../../Services/User/createUser'
import { getUserEmail } from '../../Services/User/getUserEmail';
import styled from 'styled-components'

const RegisterForm = () => {

    const { register, handleSubmit, watch, formState:{ errors } } = useForm<User>();

    const [email, setEmail] = useState("")
    const [emailError, setEmailErrore] = useState("")

    return (
        <Container>
            <ImageContainer>
                <Image src="assets/images/register.jpeg" alt="" />
            </ImageContainer>
            <Form onSubmit={handleSubmit(async (form) => {

                const getUserByEmail = await getUserEmail(email)

                if (getUserByEmail.length > 0){
                    setEmailErrore('This email already existe')
                } else {
                    setEmailErrore('')
                    const createUserAction = await createUser(form);
                    console.log(createUserAction);
                }

            })}>
                <FormTitle>Register your account</FormTitle>
                <EmailInput onInput={((event:any) => setEmail(event.target.value))} placeholder="Email: " {...register("email", {
                    required:true
                })}/>
                {errors.email?.type === "required" && "email is required"}
                <p>{emailError}</p>
                <br />
                <UsernameInput placeholder="username: " {...register('username',{
                    required:true,
                    minLength:5
                })}/>
                {errors.username?.type === "minLength" && "username need to be longer than 5 caraters"}
                <br />
                <PasswordInput placeholder="Password: " {...register('password',{
                    required:true,
                    minLength:8,
                })}/>
                {errors.password?.type === "minLength" && "the password length need to be above 8"}
                <br />
                <PasswordConfirmInput placeholder="Confirm password: " {...register("confirmPassword",{
                    required:true,
                    minLength:8,
                    validate: (value:string) => value === watch("password") || "The password does not match"
                })}/>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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
const FormTitle = styled.p`
    font-size:25px;
    margin-bottom:25px;
    color:white;
`
const EmailInput = styled.input`
    margin-bottom:10px;
    height:25px;
    padding:5px 10px;
    border-radius:5px;
    border:none;
`
const UsernameInput = styled.input`
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
const PasswordConfirmInput = styled.input`
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

export default RegisterForm;
