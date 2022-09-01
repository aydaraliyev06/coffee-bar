import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../Components/AddProduct/AddProduct';
import Authorization from '../Components/Auth/Authorization';
import Cart from '../Components/Cart/Cart';
import DrinkMenu from '../Components/DrinkMenu/DrinkMenu';
import EditProduct from '../Components/EditProduct/EditProduct';
import Error from '../Components/Error/Error';
import Face from '../Components/Face/Face';
import Navbar from '../Components/Home/Navbar';
import ProductDetails from '../Components/ProductDetails/ProductDetails';
import Profile from '../Components/Profile/Profile';
import Recommends from '../Components/Recommends/Recommends';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Face/>} />
                <Route path='/auth' element={<Authorization/>}/>
                <Route path='/home' element={<Navbar/>} />
                <Route path='/add' element={<AddProduct/>} />
                <Route path='/menu' element={<DrinkMenu/>}/>
                <Route path='/oneproduct/:id' element={<ProductDetails/>} />
                <Route path='/edit/:id' element={<EditProduct/>} />
                <Route path='/recommends' element={<Recommends/>} />
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<Error/>} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </>
    );
};

export default Router;