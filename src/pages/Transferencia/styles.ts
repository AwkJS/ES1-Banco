import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #A948FF;
    width: 100%;
    height: 100vh;
`


export const ColumnContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;



`

export const RowContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Title = styled.h1`

    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    font-weight: 500;
    margin: 30px;


`

export const InfoTitle = styled.span`

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    font-weight: 500;
    margin: 10px;


`

export const Info = styled.p`

    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #303030;
    font-weight: 500;
    margin: 3px;
    

`

export const SubTitle = styled.h2`


    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: 500;
    margin: 20px;



`

export const Input = styled.input`


    width: 150px;
    border-bottom: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 30px;
    background: transparent;
    color: white;


`

export const InputMaior = styled.input`


    width: 300px;
    border-bottom: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 30px;
    background: transparent;
    color: white;


`

export const Button = styled.button`

    border: none;
    position: relative;
    padding: 1em 1.5em;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 70;
    margin-top: 30px;
    margin-left: 25px;
    margin-right: 25px;
    ::after{
     content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
    ::before{
      content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
      ::after{
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #FFFFFF;
        border-right-color: #FFFFFF;
      }
      ::before{
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #FFFFFF;
        border-left-color: #FFFFFF;
      }
    :hover:after{
        width: 100%;
        height: 100%;
    }
    :hover:before{
        width: 100%;
        height: 100%;
        
    }




`