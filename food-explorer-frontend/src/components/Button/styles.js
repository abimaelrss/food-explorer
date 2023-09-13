import styled from 'styled-components';

export const Container = styled.button`
  width: 216px;
  background-color: ${({ theme } ) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme } ) => theme.COLORS.LIGHT_100};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;