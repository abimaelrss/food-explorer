import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  padding: 1.4rem;

  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;

  resize: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  border: 0;
  border-radius: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
