import styled from "styled-components";

export const Container = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;

  > input {
    width: 24rem;

    padding: 1.2rem 1.4rem;
    /* margin-bottom: 2.4rem; */

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: 0;
    border-radius: 0.8rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
