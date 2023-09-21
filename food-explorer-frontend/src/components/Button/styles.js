import styled from "styled-components";

export const Container = styled.button`
  /* width: 100%; */
  min-width: 21.6rem;
  height: 4.8rem;

  border: 0;
  border-radius: 0.5rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    width: 3.2rem;
    padding-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
