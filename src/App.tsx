import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Pages/Header';
import Register from './Pages/User/Register';
import Connection from './Pages/User/Connection';
import CreateProduct from './Pages/Product/CreateProduct';
import Users from './Pages/User/Users';
import UserPage from './Pages/User/UserPage';
import UpdateUser from './Pages/User/UpdateUser';
import CreatePromotion from './Pages/Promotion/CreatePromotion'
import CreateCategoryPage from './Pages/Category/CreateCategoryPage';

function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/connection" element={<Connection></Connection>}></Route>
                    <Route path="/product/create" element={<CreateProduct></CreateProduct>}></Route>
                    <Route path="/users" element={<Users></Users>}></Route>
                    <Route path="/user" element={<UserPage></UserPage>}></Route>
                    <Route path="/update" element={<UpdateUser></UpdateUser>}></Route>
                    <Route path="/promotion/create" element={<CreatePromotion></CreatePromotion>}></Route>
                    <Route path="/category" element={<CreateCategoryPage></CreateCategoryPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;