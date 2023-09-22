import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 55rem; */
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
`;
