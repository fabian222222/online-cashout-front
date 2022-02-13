import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { CartProvider } from './Providers/CartProvider';
import { UserProvider } from './Providers/UserProvider';

import Header from './Pages/Header';
import Register from './Pages/User/Register';
import Connection from './Pages/User/Connection';
import CreateProduct from './Pages/Product/CreateProduct';
import PrivateRoute from './Services/PrivateRoute';
import Users from './Pages/User/Users';
import UserPage from './Pages/User/UserPage';
import UpdateUser from './Pages/User/UpdateUser';
import CreatePromotion from './Pages/Promotion/CreatePromotion'
import CreateCategoryPage from './Pages/Category/CreateCategoryPage';
import UpdateCategoryPage from './Pages/Category/UpdateCategoryPage'
import GetCategories from './Pages/Category/GetCategories'
import ListProducts from './Pages/Product/ListProducts';
import Deconnection from './Pages/User/Disconnect';
import ListCart from './Pages/Cart/ListCart';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/register" element={<Register></Register>}></Route>
                        <Route path="/connection" element={<Connection></Connection>}></Route>
                        <Route path="/disconnect" element={<Deconnection></Deconnection>}></Route>

                        <Route path="/product/create" element={
                            <PrivateRoute>
                                <CreateProduct></CreateProduct>
                            </PrivateRoute>
                        }></Route>
                        <Route path="/products" element={
                            <PrivateRoute>
                                <ListProducts></ListProducts>
                            </PrivateRoute>
                        }></Route>

                        <Route path="/users" element={
                            <PrivateRoute>
                                <Users></Users>
                            </PrivateRoute>
                        }></Route>
                        <Route path="/user" element={
                            <PrivateRoute>
                                <UserPage></UserPage>
                            </PrivateRoute>
                        }></Route>
                        <Route path="/update" element={
                            <PrivateRoute>
                                <UpdateUser></UpdateUser>
                            </PrivateRoute>
                        }></Route>

                        <Route path="/promotion/create" element={
                            <PrivateRoute>
                                <CreatePromotion></CreatePromotion>
                            </PrivateRoute>
                        }></Route>

                        <Route path="/category" element={
                            <PrivateRoute>
                                <CreateCategoryPage></CreateCategoryPage>
                            </PrivateRoute>
                        }></Route>
                        <Route path="/category/update/:id" element={
                            <PrivateRoute>
                                <UpdateCategoryPage></UpdateCategoryPage>
                            </PrivateRoute>
                        }></Route>  
                        <Route path="/categories" element={
                            <PrivateRoute>
                                <GetCategories></GetCategories>
                            </PrivateRoute>
                        }> </Route>

                        <Route path="/carts" element={
                            <PrivateRoute>
                                <ListCart></ListCart>
                            </PrivateRoute>
                        }> </Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </UserProvider>
    );
}

export default App;