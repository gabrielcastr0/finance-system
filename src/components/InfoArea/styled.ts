import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  
  @media screen and (max-width: 425px){
    flex-direction: column;
    gap: 25px;
  }
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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