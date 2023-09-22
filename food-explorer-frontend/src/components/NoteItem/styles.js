import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

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
    background: none;
  }

  .button-delete {
    /* color: ${({ theme }) => theme.COLORS.RED}; */
  }
  
  .button-add {
    /* color: ${({ theme }) => theme.COLORS.ORANGE}; */
  }

  > input {
    width: 11.8rem;
    /* height: 3.2rem; */

    /* margin-right: 1.6rem; */

    padding: 1rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
