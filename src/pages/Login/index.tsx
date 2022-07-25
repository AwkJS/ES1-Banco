import React, { useState } from 'react';
import * as L from './styles';

const Login: React.FC = () => {


    return (

        <>

            <L.GlobalContainer>
                <L.Title>19 Bank</L.Title>
                <L.SubTitle>Sign In</L.SubTitle>
                <L.Input type='text' placeholder='Username'></L.Input>
                <L.Input type='password' placeholder='Password'></L.Input>
                <L.LoginButton href='/Patient'>LogIn</L.LoginButton>
                <L.RowContainer>
                    <L.BlackText>Does not have account?</L.BlackText>
                    <L.SignUpText href='/SignUp'>Sign Up</L.SignUpText>
                </L.RowContainer>
            </L.GlobalContainer>
            
        </>

    );
};

export default Login;