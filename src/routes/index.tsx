import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Transferencia from '../pages/Transferencia';


const PageRoutes: React.FC = () => (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/transferencia' element={<Transferencia/>} />
        </Routes>

);

export default PageRoutes;
