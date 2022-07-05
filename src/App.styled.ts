import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  background: blue;
  width: auto;
  height: 9.375rem;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 1.875rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.188rem;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 61.25rem;
  margin-bottom: 3.125rem;

  @media screen and (max-width: 768px){
    padding: 0 10px 0 10px;
  }
`;