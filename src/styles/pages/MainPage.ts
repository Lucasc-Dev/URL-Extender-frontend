import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f2f2fa;
`;

export const Header = styled.header`
`;

export const Title = styled.h1`
    width: 600px;
    padding-bottom: 32px;

    font-size: 50px;
    text-align: center;
`;

export const Subtitle = styled.p`
    font-size: 24px;
    text-align: center;
`;

export const FormContainer = styled.div`
    width: 550px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputTitle = styled.label`
    font-size: 24px;
    font-weight: 600;
    cursor: text; 
`;

export const Input = styled.input`
    width: 100%;
    padding: 16px;
    margin: 20px auto 36px;
    border-radius: 16px;
    border: 1px solid #A8A8AE;
    outline: none;
    background-color: #f9f9f9;

    font-size: 22px;
    color: #47474d;
`;

export const Button = styled.button`
    width: 256px;
    height: 64px;
    margin: 16px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 0;
    outline: none;
    cursor: pointer;

    background-color: #2C87C5;
`;

export const ButtonText = styled.h2`
    font-size: 20px;
    color: #f2f2fa;
`;
