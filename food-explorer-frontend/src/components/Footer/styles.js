import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 48px;
  padding: 0 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  .frame {
    display: flex;
    align-items: center;
  }

  .frame img {
    width: 24px;
    margin-right: 10px;

    fill: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  .frame h2 {
    font-size: 21px;
  }
`;
