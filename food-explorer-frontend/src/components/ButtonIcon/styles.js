import styled from "styled-components";

export const Container = styled.button`
  border: none;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  background: none;
  
  svg {
    color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.LIGHT_300 : theme.COLORS.TINTS_TOMATO_100};
  }

  p {
    @media (min-width: 1024px) {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;
