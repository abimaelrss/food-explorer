import styled from "styled-components";

export const Container = styled.button`
  border: none;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  background: none;

  button {
    background: none;
    border: none;

    svg {
      width: 2.4rem;
      height: 2.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  p {
    @media (min-width: 1024px) {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;
