import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const AddButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 15px;

  > svg{
    font-size: 20px;
  }
`;