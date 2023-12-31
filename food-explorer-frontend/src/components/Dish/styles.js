import styled from "styled-components";
import { Link } from "react-router-dom";

export const Render = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  img {
    width: 100%;
    max-width: 8.8rem;

    @media (min-width: 800px) {
      width: 100%;
      max-width: 17.6rem;
    }
  }

  > h2 {
    font-family: "Poppins" sans-serif;
    font-weight: 500;
    font-size: 1.4rem;

    @media (min-width: 1024px) {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }

  > p {
    display: none;

    @media (min-width: 1024px) {
      display: block;
      font-family: "Roboto" sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
`;

export const Container = styled.div`
  text-align: center;

  padding: 7rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  @media (min-width: 1024px) {
    min-height: 46.2rem;
  }

  > img,
  h2,
  span,
  p {
    margin-bottom: 1.2rem;
    text-align: center;
  }

  > span {
    font-family: "Roboto" sans-serif;
    font-weight: 400;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 1.2rem;

    @media (min-width: 1024px) {
      flex-direction: row;
    }

    .stepper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      font-family: "Roboto" sans-serif;
      font-weight: 400;
      font-size: 1.6rem;

      margin-bottom: 2.4rem;

      > button {
        height: 2.4rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: none;
        border: none;
      }

      @media (min-width: 1024px) {
        margin-bottom: 0;
        font-size: 2rem;
      }
    }
  }

  .favorite {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
  }
`;
