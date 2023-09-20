import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1122px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  
`;

export const Component = styled.header`
  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const Menu = styled.div`
margin-right: 7.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  .btn1 {
    width: 2.4rem;
    background: none;
    border: none;
  }

  .btn1:active {
    display: none;
  }

  .btn2 {
    display: none;
  }

  p {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Brand = styled.div`
  min-width: 27.8rem;
  height: 3.9rem;

  display: flex;
  align-items: center;

  position: relative;

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
      right: 12rem;
      bottom: -0.5rem;
    }
  }
`;

export const Search = styled.div`
  min-width: 40rem;
  /* max-width: 55rem; */
  width: 100%;
  height: 4.8rem;
  margin: 0 3.2rem;

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
  /* width: 100%; */
  min-width: 21.6rem;
  height: 4.8rem;

  border: 0;
  border-radius: 0.5rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > img {
    width: 3.2rem;
    padding-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
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
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.2rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
