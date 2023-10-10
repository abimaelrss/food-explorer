import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1122px;

  margin: 0 auto;
`;

export const Content = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.3rem;
  padding: 1.5rem 5.6rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;

  font-family: "Poppins", sans-serif;
  text-align: center;

  @media (min-width: 1024px) {
  }

  main {
    /* max-width: 60rem; */

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    > img {
      margin: 1.6rem 2.6rem;
      width: 100%;
      min-width: 26.3rem;
      max-width: 39rem;

      @media (min-width: 800px) {
        margin-top: 4.2rem;
        margin-right: 4.7rem;
      }
    }

    @media (min-width: 800px) {
      flex-direction: row;
      text-align: left;
    }
  }

  .ingredient {
    > h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-size: 2.7rem;
      font-weight: 500;

      @media (min-width: 900px) {
        font-size: 3.8rem;
      }

      @media (min-width: 1024px) {
        font-size: 4rem;
      }
    }

    > p {
      font-size: 1.6rem;

      margin: 2.4rem 0;

      @media (min-width: 800px) {
        margin-bottom: 2.4rem;
      }

      @media (min-width: 900px) {
        font-size: 2rem;
      }

      @media (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }
  }

  .ingredients {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;

    margin-bottom: 4.8rem;

    > span {
    }

    @media (min-width: 800px) {
      justify-content: start;
      text-align: left;

      gap: 1.2rem;
    }
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    margin-top: 3rem;

    @media (min-width: 800px) {
      justify-content: start;
    }

    .stepper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      font-size: 2.2rem;

      button {
        background: none;
        border: none;
      }

      @media (min-width: 800px) {
        font-size: 2rem;
      }
    }
  }
`;
