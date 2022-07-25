import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Transferencia from '../pages/Transferencia';
import Administrador from '../pages/Administrador';
import CadastrarAgencia from '../pages/CadastrarAgencia';
import CadastrarAlgo from '../pages/CadastrarAlgo';

const PageRoutes: React.FC = () => (
        <Routes>
            <Route path='/Login' element={<Login/>} />
            <Route path='SignUp' element={<SignUp/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Transferencia' element={<Transferencia/>} />
            <Route path='/Administrador' element={<Administrador/>} />
            <Route path='/CadastrarAgencia' element={<CadastrarAgencia/>} />
            <Route path='/CadastrarAlgo' element={<CadastrarAlgo/>} />
        </Routes>

);

export default PageRoutes;
