import React from 'react';
import * as H from './styles'
import Money from '../../assets/Saly-45.png';

const Home: React.FC = () => {


    return (

        
        <H.GlobalContainer>
            <H.ColumnContainer>
                    <H.Title>Bem-vindo ao 19Bank, Gustavo</H.Title>
                    <H.Image src={Money}></H.Image>
            </H.ColumnContainer>
            <H.ColumnContainer>
                <H.RowContainer>
                    <H.InfoTitle>Banco: </H.InfoTitle>
                    <H.Info><u>19Bank</u></H.Info>
                    <H.InfoTitle>Agência:</H.InfoTitle>
                    <H.Info><u>199</u></H.Info>
                    <H.InfoTitle>CNPJ Agência:</H.InfoTitle>
                    <H.Info><u>09848129421/19</u></H.Info>
                </H.RowContainer>
                <H.RowContainer>
                    <H.InfoTitle>Cliente:</H.InfoTitle>
                    <H.Info><u>Gustavo Juliano Borges</u></H.Info>
                    <H.InfoTitle>CPF/CNPJ:</H.InfoTitle>
                    <H.Info><u>47843129081</u></H.Info>
                </H.RowContainer>
                <H.RowContainer>
                    <H.InfoTitle>Nro. Conta Bancária do Cliente:</H.InfoTitle>
                    <H.Info><u>12393012</u></H.Info>
                    <H.InfoTitle>Data Abertura Conta:</H.InfoTitle>
                    <H.Info><u>20/10/2000</u></H.Info>
                </H.RowContainer>
            </H.ColumnContainer>
            <H.SubTitle>Extrato Bancário</H.SubTitle>
            <H.ColumnContainer>
                <H.Table>
                    <H.TrT>
                        <H.TdT>Data Transação</H.TdT>
                        <H.TdT>Cod</H.TdT>
                        <H.TdT>Motivo Transação</H.TdT>
                        <H.TdT>Valor da Transação</H.TdT>
                    </H.TrT>
                    <H.TrT>
                        <H.TdT>20/10/2000</H.TdT>
                        <H.TdT>13</H.TdT>
                        <H.TdT>Pizza Doce</H.TdT>
                        <H.TdT>R$ 15,00</H.TdT>
                    </H.TrT>
                </H.Table>
            </H.ColumnContainer>
            <H.RowContainer>
                <H.InfoTitle>Saldo Atual: R$</H.InfoTitle>
                <H.Info><u>135000,00</u></H.Info>
            </H.RowContainer>
            <H.ColumnContainer>
                <H.Button href='/transferencia'>Realizar uma Transferência</H.Button>
            </H.ColumnContainer>
        </H.GlobalContainer>
            
        
    );
};

export default Home;