import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 4.8rem;

  font-family: "Poppins", sans-serif;

  > h2 {
    margin-bottom: 2.3rem;
    /* padding-bottom: 1.6rem; */

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    font-size: 1.6rem;
    font-weight: 500;

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }
  }

  main {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;
