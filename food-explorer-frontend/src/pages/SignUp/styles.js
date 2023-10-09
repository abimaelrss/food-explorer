import styled from "styled-components";

export const Container = styled.div`
  /* min-width: 42.8rem; */
  height: 100vh;
  margin: 0 auto;

  padding: 0 4rem;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    
    padding: 15.8rem 6.5rem;
    /* padding: 0 10rem; */
  }
`;

export const Background = styled.div`
  min-width: 32.4rem;
  display: flex;
  align-items: center;

  margin-bottom: 7.3rem;

  > img {
    width: 4.3rem;
    margin-right: 1rem;
  }

  > h1 {
    font-family: "Roboto", sans-serif;
    font-size: 3.7rem;
    font-weight: bold;
  }
`;

export const Form = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;

  /* padding: 0 6.5rem; */

  border-radius: 1.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > h1 {
    font-family: "Poppins", sans-serif;
    font-size: 3.2rem;
    font-weight: 400;

    text-align: center;

    margin-bottom: 32px;

    display: none;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;

    font-weight: 400;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    width: 100%;

    padding: 1.2rem 1.4rem;
    margin-bottom: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: 0;
    border-radius: 0.8rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    @media (min-width: 768px) {
      min-width: 34.8rem;

      background-color: ${({ theme }) => theme.COLORS.LIGHT_900};
    }
  }

  button {
    width: 100%;

    height: 4.8rem;

    padding: 1.2rem 2.4rem;

    border: 0;
    border-radius: 0.5rem;

    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    font-weight: 300;

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:disabled {
      opacity: 0.5;
    }
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 768px) {
    width: 47.6rem;
    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
      display: block;
    }
  }
`;
