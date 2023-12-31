import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;

  border-radius: 8px;
  padding-right: 16px;

  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparente" : theme.COLORS.LIGHT_600};
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.LIGHT_100}` : "none"};

  > button {
    border: none;
    font-size: 1.6rem;

    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > input {
    width: 11.8rem;
    height: 3.2rem;

    padding: 1rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
