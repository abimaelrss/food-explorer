import styled from "styled-components";

export const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  
  > input {
    width: 581px;

    padding: 16px 116px;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: 0;
    border-radius: 5px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    transform: translateX(100px);
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
