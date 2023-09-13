import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    font-size: 48px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Background = styled.div`
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;
