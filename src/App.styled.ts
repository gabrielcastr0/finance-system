import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #ff00cc;
  background: -webkit-linear-gradient(to right, #333399, #ff00cc);
  background: linear-gradient(to right, #333399, #ff00cc);Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
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