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
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      margin: 1.6rem 2.6rem;
      width: 100%;
      min-width: 26.3rem;
      max-width: 39rem;

      @media (min-width: 800px) {
        min-width: 39rem;

        /* margin-top: 4.2rem;
        margin-right: 4.7rem; */
      }
    }

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .ingredients {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;

    /* padding: 0 5.6rem; */

    > h2 {
      margin-top: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-size: 2.7rem;
      font-weight: 500;

      @media (min-width: 1024px) {
        font-size: 4rem;
        margin-top: 2.4rem;
      }
    }

    > p {
      font-size: 1.6rem;
      
      @media (min-width: 800px) {
        margin-bottom: 2.4rem;
      }
      @media (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }

    > span {
      padding: 4px 8px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-size: 1.4rem;
      font-weight: 500;
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

    .stepper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      font-size: 2.2rem;
    }
  }
`;
