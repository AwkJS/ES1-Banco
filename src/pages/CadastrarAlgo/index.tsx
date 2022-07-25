import React, { useState } from 'react';
import * as C from './styles';

const CadastrarAlgo: React.FC = () => {


    return (

        <>

            <C.GlobalContainer>
                <C.Title>Cadastrar alguma coisa</C.Title>
                <C.Input></C.Input>
                <C.Input></C.Input>
                <C.ButtonCadastrar>Cadastrar</C.ButtonCadastrar>
            </C.GlobalContainer>
            
        </>

    );
};

export default CadastrarAlgo;