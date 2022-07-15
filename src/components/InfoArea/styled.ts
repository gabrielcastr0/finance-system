import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 20px;
  margin-top: 30px;
  
  @media screen and (max-width: 425px){
    flex-direction: column;
    gap: 25px;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const MonthArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
  padding: 0 10px 0 10px;

  > svg{
    font-size: 20px;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  display: flex;
  width: 100%;
`;