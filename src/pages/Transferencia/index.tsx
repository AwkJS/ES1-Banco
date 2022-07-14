import React from 'react';
import * as T from './styles'

const Transferencia: React.FC = () => {


    return (

        
        <T.GlobalContainer>
            <T.ColumnContainer>
                <T.Title>Transferência bancária entre contas</T.Title>
            </T.ColumnContainer>
            <T.ColumnContainer>
                <T.RowContainer>
                    <T.InfoTitle>Cliente (Correntista):</T.InfoTitle>
                    <T.Info><u>Gustavo Juliano Borges</u></T.Info>
                    <T.InfoTitle>CPF/CNPJ:</T.InfoTitle>
                    <T.Info><u>47843513875</u></T.Info>
                </T.RowContainer>
                <T.RowContainer>
                    <T.InfoTitle>Nro. Conta Bancária:</T.InfoTitle>
                    <T.Info><u>12393012</u></T.Info>
                    <T.InfoTitle>Banco: </T.InfoTitle>
                    <T.Info><u>19Bank</u></T.Info>
                    <T.InfoTitle>Agência:</T.InfoTitle>
                    <T.Info><u>199</u></T.Info>
                </T.RowContainer>
            </T.ColumnContainer>
            <T.ColumnContainer>
                <T.SubTitle>Favorecido (conta a transferir)</T.SubTitle>
            </T.ColumnContainer>
            <T.ColumnContainer>
                <T.RowContainer>
                    <T.InfoTitle>Cod. Banco:</T.InfoTitle>
                    <T.Input></T.Input>
                    <T.InfoTitle>Nro. Agência:</T.InfoTitle>
                    <T.Input></T.Input>
                    <T.InfoTitle>Nro. Conta</T.InfoTitle>
                    <T.Input></T.Input>
                </T.RowContainer>
                <T.RowContainer>
                    <T.InfoTitle>Nome Favorecido:</T.InfoTitle>
                    <T.InputMaior></T.InputMaior>
                    <T.InfoTitle>CPF/CNPJ:</T.InfoTitle>
                    <T.Input></T.Input>
                </T.RowContainer>
                <T.RowContainer>
                    <T.InfoTitle>Valor da Transferência: R$</T.InfoTitle>
                    <T.Input></T.Input>
                </T.RowContainer>
            </T.ColumnContainer>
            <T.ColumnContainer>
                <T.Button>Concluír Transferência</T.Button>
            </T.ColumnContainer>
        </T.GlobalContainer>
            
        
    );
};

export default Transferencia;