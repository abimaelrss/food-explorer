import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-width: 42.8rem;
  height: 100%;

  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 1.6rem 5.6rem 3.3rem;

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
      margin-top: 1.6rem;
      width: 100%;
      max-width: 39rem;
      
      @media (min-width: 800px) {
        min-width: 39rem;
        margin-right: 4.7rem;
      }
    }

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .ingredients {
    margin-top: 2.4rem;
    margin-bottom: 4.8rem;

    max-width: 68rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;

    > h2 {
      margin-top: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      font-size: 2.7rem;
      font-weight: 500;

      @media (min-width: 1024px) {
        font-size: 4rem;
      }
    }

    > p {
      margin-top: 2.4rem;
      font-size: 1.6rem;
      
      @media (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }

    > span {
      padding: 4px 8px;
      background-color: ${({ theme }) => theme.COLORS.DARK_1000};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-size: 1.4rem;
    }

    @media (min-width: 1024px) {
      justify-content: start;
      text-align: left;
    }
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    .stepper {
      display: flex;
      /* align-items: center; */
      justify-content: center;
      gap: 1.5rem;
    }
  }
`;
