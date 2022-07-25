import React, { useState } from 'react';
import * as C from './styles';

const CadastrarAgencia: React.FC = () => {

    const[agencyCode, setAgencyCode] = useState('');
    const[agencyCNPJ, setAgencyCNPJ] = useState('');
    const[name, setName] = useState('')
    const[addressCEP, setAddressCEP] = useState('');
    const[addressStreet, setAddressStree] = useState('');
    const[addressCity, setAddressCity] = useState('')
    const[addressState, setAddressState] = useState('')
    const[addressNumber, setAddressNumber] = useState('');
    const[addressComplement, setAddressComplement] = useState('')

    return (

        <>

            <C.GlobalContainer>
                <C.Title>Cadastro de uma agência</C.Title>
                <C.ContainerForm>
                    <C.Input placeholder='Código'></C.Input>
                    <C.Input placeholder='CNPJ'></C.Input>
                    <C.Input placeholder='Gerente'></C.Input>
                    <C.Input type='text' placeholder='Postal Code'></C.Input>
                    <C.Input type='text' placeholder='Street'></C.Input> 
                    <C.Input type='text' placeholder='City'></C.Input>
                    <C.Select value = {addressState} onChange={e => setAddressState(e.target.value)}>
                        <option value="ac">AC</option>
                        <option value="al">AL</option>
                        <option value="ap">AP</option>  
                        <option value="am">AM</option>
                        <option value="ba">BA</option>
                        <option value="ce">CE</option>
                        <option value="df">DF</option>
                        <option value="es">ES</option>
                        <option value="go">GO</option>
                        <option value="ma">MA</option>
                        <option value="mt">MT</option>
                        <option value="ms">MS</option>
                        <option value="mg">MG</option>
                        <option value="pa">PA</option>
                        <option value="pb">PB</option>
                        <option value="pr">PR</option>
                        <option value="pe">PE</option>
                        <option value="pi">PI</option>
                        <option value="rj">RJ</option>
                        <option value="rn">RN</option>
                        <option value="rs">RS</option>
                        <option value="ro">RO</option>
                        <option value="rr">RR</option>
                        <option value="sc">SC</option>
                        <option value="sp">SP</option>
                        <option value="se">SE</option>
                        <option value="to">TO</option>
                    </C.Select>
                    <C.Input type='text' placeholder='Number' onChange = {(event) => {setAddressNumber(event.target.value)}}></C.Input>
                    <C.Input type='text' placeholder='Complement' onChange = {(event) => {setAddressComplement(event.target.value)}}></C.Input>
                </C.ContainerForm>
                <C.ButtonCadastrar>Cadastrar</C.ButtonCadastrar>
            </C.GlobalContainer>
            
        </>

    );
};

export default CadastrarAgencia;