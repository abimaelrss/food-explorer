import styled from "styled-components";

export const Container = styled.div`
  min-width: 21rem;

  text-align: center;

  padding: 7rem 2.4rem;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  h2 {
    font-family: "Poppins" sans-serif;
    font-weight: 500;
    font-size: 1.4rem;

    @media (min-width: 1024px) {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }

  p {
    display: none;

    @media (min-width: 1024px) {
      display: block;
      font-family: "Roboto" sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
    }
  }

  > img,
  h2,
  p {
    margin-bottom: 1.5rem;
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

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .favorite {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
  }

  @media (min-width: 1024px) {
    min-width: 30.4rem;
  }
`;
