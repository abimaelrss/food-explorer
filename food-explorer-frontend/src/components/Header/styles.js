import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1122px;

  display: flex;
  align-items: center;

  margin: 0 auto;

  .imageMenuMobile {
    border: none;
    background: none;
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .searchContainer {
    width: 100%;
    margin: 0 3.2rem;

    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }

  @media (min-width: 800px) {
    justify-content: space-between;
  }
`;

export const Component = styled.header`
  padding: 5.6rem 2.8rem 2.4rem 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 1024px) {
    padding: 2.8rem 12.3rem;
  }
`;

export const Brand = styled(Link)`
  min-width: 19.7rem;
  height: 3.9rem;

  margin: 0 auto;

  display: flex;
  align-items: center;

  position: relative;

  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    margin-right: 0.8rem;
    width: 2.4rem;
  }

  > h1 {
    margin-right: 0.8rem;
    font-size: 2.1rem;
  }

  > p {
    font-weight: bold;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    @media (min-width: 1024px) {
      position: absolute;
      right: 4rem;
      bottom: -0.5rem;
    }
  }
`;

export const Order = styled.button`
  position: relative;

  background: none;
  border: none;

  span {
    width: 2rem;
    height: 2rem;

    border-radius: 50%;

    position: absolute;

    top: -3px;
    right: -5px;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.4rem;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Search = styled.div`
  /* max-width: 55rem; */
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 21.6rem;
  height: 4.8rem;

  border: 0;
  border-radius: 0.5rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

  > img {
    width: 3.2rem;
    padding-right: 0.8rem;
  }

  > span {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  margin-left: 3.2rem;

  display: flex;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.2rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
