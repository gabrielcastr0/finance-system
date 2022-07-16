import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  color: #fff;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;
`;