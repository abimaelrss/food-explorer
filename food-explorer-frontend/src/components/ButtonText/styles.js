import styled from "styled-components";

export const Container = styled.button`
  border: none;
  font-size: 2.4rem;

  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.LIGHT_100 : theme.COLORS.GRAY_100};
`;
