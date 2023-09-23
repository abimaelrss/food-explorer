import styled from "styled-components";

export const Container = styled.button`
  border: none;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.LIGHT_100 : theme.COLORS.GRAY_100};

  p {
    @media (min-width: 1024px) {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;
