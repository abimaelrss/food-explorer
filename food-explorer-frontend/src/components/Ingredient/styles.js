import styled from "styled-components";

export const Container = styled.span`
  padding: 4px 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-size: 1.4rem;
  font-weight: 500;

  gap: 1.2rem;
`;
