import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1122px;
  /* height: 100vh; */

  margin: 0 auto;
`;

export const Content = styled.div`
  padding-left: 3rem;
  padding-right: 1.6rem;

  .banner {
    position: relative;
    height: 15rem;

    margin-bottom: 6.2rem;

    display: flex;
    align-items: end;

    > img {
      position: absolute;
      height: 100%;
      bottom: 0;
      left: -3.5rem;

      @media (min-width: 1024px) {
        left: -5.5rem;
      }
    }

    @media (min-width: 600px) {
      height: 22rem;
    }

    @media (min-width: 800px) {
      height: 28rem;
    }

    @media (min-width: 1024px) {
      height: 41.2rem;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 12rem;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: end;

  font-family: "Poppins", sans-serif;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 600px) {
    height: 15rem;
  }
  @media (min-width: 800px) {
    height: 19rem;
  }

  @media (min-width: 1024px) {
    height: 26rem;
  }

  .sabores {
    width: 50%;

    padding-top: 3.6rem;
    padding-bottom: 2.2rem;
    /* padding-right: 2.1rem; */

    z-index: 100;

    > h2 {
      font-weight: 600;
      font-size: 1.8rem;

      @media (min-width: 600px) {
        font-size: 2.5rem;
      }
      @media (min-width: 700px) {
        font-size: 3rem;
      }
      @media (min-width: 800px) {
        font-size: 3.5rem;
      }
      @media (min-width: 1024px) {
        font-weight: 500;
        font-size: 4rem;
      }
    }

    > p {
      font-weight: 400;
      font-size: 1.2rem;

      @media (min-width: 600px) {
        font-size: 1.3rem;
      }
      @media (min-width: 700px) {
        font-size: 1.4rem;
      }
      @media (min-width: 800px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1024px) {
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
      }
    }
    @media (min-width: 1024px) {
      padding-top: 0;
      width: 45%;
    }
  }
`;
