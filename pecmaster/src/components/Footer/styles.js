import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;
`;