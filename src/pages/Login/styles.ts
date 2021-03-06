import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #A948FF;
    width: 100%;
    height: 100vh;
`

export const Title = styled.h1`


    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #303030;
    font-size: 50px;
    margin: 50px;


`

export const SubTitle = styled.h2`

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #303030;
    font-size: 35px;
    margin-bottom: 50px;

`

export const Input = styled.input`

    padding: 0.8rem;
    width: 500px;
    height: 30px;
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

export const LoginButton = styled.a`

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
    margin-top: 30px;
    margin-bottom: 20px;
    text-decoration: none;
    :hover{
        cursor: pointer;
        border: 2px solid #fff;
    }
    :visited{
            text-decoration: none;
            color: #FFFFFF;
    }


`

export const SignUpText = styled.a`

    font-family:'Roboto', sans-serif;
    color: #303030;
    font-size: 15px;
    font-weight: 600;
    margin: 5px;

`

export const BlackText = styled.span`


    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    margin: 5px;

`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

`