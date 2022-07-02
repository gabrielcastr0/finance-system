import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
    max-width: 500px;
    z-index: 999;
    flex: 1;
    margin-top: -30px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const CategoryArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryTitle = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #000;
`;

export const CategorySelect = styled.select<{category : string}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
`;

export const CategoryOption = styled.option``;


export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #000;
`;


export const InputTitle = styled.input<{title: string}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
`;


export const ValueArea = styled.div`
    display: flex;
    flex-direction: column;
`;


export const ValueText = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #000;
`;


export const InputValue = styled.input<{price: number}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
`;


export const Footer = styled.div`
    display: inline-block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;


export const BtnAdd = styled.button`
    margin-top: 20px;
    outline: 0;
    border: 0;
    background-color: green;
    color: #FFF;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
`;