import styled from 'styled-components';

export const Container = styled.button`
  width: auto;

  margin-right: 32px;
  padding: 12px 24px;
  
  border: 0;
  border-radius: 5px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme } ) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme } ) => theme.COLORS.LIGHT_100};
  
  > img {
    width: 32px;
    padding-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;