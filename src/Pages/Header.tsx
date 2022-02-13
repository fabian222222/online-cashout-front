import React from 'react';
import { NavLink} from "react-router-dom";
import styled from 'styled-components'

const Header = () => {

    const token = localStorage.getItem('token')

    return (
        <Container>
            <NavLink style={{textDecoration:"none", color:"white", display: token ? "none" : "flex"}} to="/register">register</NavLink>
            <NavLink style={{textDecoration:"none", color:"white", display: token ? "none" : "flex"}} to="/connection">connection</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/product/create">create product</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/products">products</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/users">users</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/user">user</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/update">update</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/promotion/create">promotion create</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/category">category</NavLink>
            <NavLink style={{textDecoration:"none", color:"white"}} to="/categories">categories</NavLink>
            <NavLink style={{textDecoration:"none", color:"white", display: token ? "flex" : "none"}} to="/disconnect">logout</NavLink>
        </Container>
    );
};

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    background-color: black;
    padding:10px 20px;
`
export default Header;
