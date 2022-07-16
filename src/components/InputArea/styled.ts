import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
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
  color: #fff;

  > svg{
    font-size: 20px;
  }
`;