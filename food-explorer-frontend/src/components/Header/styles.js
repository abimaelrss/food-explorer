import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 105px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 28px 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Brand = styled.div`
  width: 197px;
  height: 30px;

  display: flex;

  > img {
    margin-right: 10px;
  }

  > h1 {
    font-size: 24px;
  }
`;

export const Search = styled.div`
  margin-right: 32px;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 32px;
  }
`;
