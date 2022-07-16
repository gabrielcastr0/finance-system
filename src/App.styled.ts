import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #000428;
  background: -webkit-linear-gradient(to right, #004e92, #000428);
  background: linear-gradient(to right, #004e92, #000428);
`;

export const Header = styled.header`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  width: auto;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
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

export const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const FooterText = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.188rem;
  font-size: 0.9375rem;
`;