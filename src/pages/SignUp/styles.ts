import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #A948FF;
    width: 100%;
`

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #303030;
    font-size: 50px;
    margin: 50px;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const CategoryText = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #000000;
    font-size: 25px;
    margin: 30px;
`

export const Input = styled.input`
    padding: 5px;
    width: 500px;
    height: 50px;
    border: 2px solid #E7E7E7;
    border-radius: 5px;
    background: #E6E6E6;
    font-size: 18px;
    outline: none;
    transition: all 0.3s;
    color: #000;
    margin: 5px;
    :focus{
        border: 2px solid #303030;
    }
`

export const Select = styled.select`
    padding: 5px;
    width: 500px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: #E6E6E6;
    font-size: 18px;
    outline: none;
    transition: all 0.3s;
    color: #000;
    margin: 5px;
    :focus{
        border: 2px solid #1BD496;
    }
`

export const RegisterButton = styled.button`
    display: flex;
    align-items: center;
    width: 530px;
    height: 50px;
    border: 2px solid #303030;
    background: #303030;
    font-size: 18px;
    color: #fff;
    text-align: center;
    justify-content: center;
    outline: none;
    transition: all 0.3s;
    margin-top: 50px;
    margin-bottom: 50px;
    text-decoration: none;
    :hover{
        cursor: pointer;
        border: 2px solid #fff;
    }
`
