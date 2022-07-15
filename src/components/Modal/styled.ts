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
    z-index: 1;
`;

export const Content = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
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
    color: #fff;
`;

export const CategorySelect = styled.select<{category : string}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    background: transparent;
    color: #fff;
`;

export const CategoryOption = styled.option`
    background: #00000099;
`;


export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #fff;
`;


export const InputTitle = styled.input<{title: string}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    background: transparent;
    color: #fff;

    ::placeholder{
        color: #fff;
    }
`;


export const ValueArea = styled.div`
    display: flex;
    flex-direction: column;
`;


export const ValueText = styled.label`
    font-weight: bold;
    font-size: 18px;
    display: block;
    color: #fff;
`;


export const InputValue = styled.input<{price: number}>`
    padding: 10px;
    outline: 0;
    border-radius: 5px;
    margin-top: 5px;
    border: 1px solid #ccc;
    background: transparent;
    color: #fff;

    ::placeholder{
        color: #fff;
    }
`;


export const Footer = styled.div`
    display: inline-block;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`;


export const BtnActions = styled.button<{close: boolean}>`
    margin-top: 20px;
    outline: 0;
    background-color: transparent;
    border: 1px solid ${props => props.close ? 'red' : '#00FF00'};
    color: #FFF;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;

    &:hover{
        background: ${props => props.close ? 'red' : '#00FF00'};
        color: ${props => props.close ? '#fff' : '#000'};
    }
`;