import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  max-width: 31.6rem;

  height: 4.8rem;

  padding: 1.2rem 2.4rem;

  border: 0;
  border-radius: 0.5rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 300;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    width: 3.2rem;
    padding-right: 0.8rem;

    @media (min-width: 800px) {
      display: none;
    }
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 800px) {
    max-width: 16.2rem;
  }
`;
