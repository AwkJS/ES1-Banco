import React from 'react';
import * as A from './styles'
import Money from '../../assets/Saly-45.png';

const Administrador: React.FC = () => {


    return (

        
        <A.GlobalContainer>
            <A.Title>Página de Administrador</A.Title>
            <A.SubTitle>Agência Cadastradas</A.SubTitle>
            <A.ColumnContainer>
                <A.Table>
                    <A.TrT>
                        <A.TdT>Código</A.TdT>
                        <A.TdT>CNPJ</A.TdT>
                        <A.TdT>Endereço</A.TdT>
                        <A.TdT>Algo</A.TdT>
                    </A.TrT>
                    <A.TrT>
                        <A.TdT>119</A.TdT>
                        <A.TdT>1384329130/12</A.TdT>
                        <A.TdT>Rua Angelim Favassa</A.TdT>
                        <A.TdT>Coisa</A.TdT>
                    </A.TrT>
                </A.Table>
            </A.ColumnContainer>
            <A.SubTitle>Clientes Cadastrados</A.SubTitle>
            <A.ColumnContainer>
                <A.Table>
                    <A.TrT>
                        <A.TdT>Nome</A.TdT>
                        <A.TdT>CPF</A.TdT>
                        <A.TdT>Endereço</A.TdT>
                        <A.TdT>Algo</A.TdT>
                    </A.TrT>
                    <A.TrT>
                        <A.TdT>Gustavo Borges</A.TdT>
                        <A.TdT>47843518320</A.TdT>
                        <A.TdT>Rua Francisco Favassa</A.TdT>
                        <A.TdT>Coisa</A.TdT>
                    </A.TrT>
                </A.Table>
            </A.ColumnContainer>
        </A.GlobalContainer>
            
        
    );
};

export default Administrador;