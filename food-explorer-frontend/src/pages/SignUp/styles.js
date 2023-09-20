import styled from "styled-components";

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15.8rem 6.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0 10rem;
  }
`;

export const Background = styled.div`
  min-width: 32.4rem;
  display: flex;
  align-items: center;

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
  width: 47.6rem;
  padding: 6.4rem;

  display: flex;
  flex-direction: column;

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
    min-width: 34.8rem;

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
      background-color: ${({ theme }) => theme.COLORS.LIGHT_900};
    }
  }

  > a {
    margin-top: 3.2rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    h1 {
      display: block;
    }
  }
`;
