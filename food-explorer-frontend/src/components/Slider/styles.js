import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2.4rem;

  font-family: "Poppins", sans-serif;

  position: relative;

  button {
    border: none;
    background: none;

    position: absolute;
    bottom: 13rem;

    visibility: hidden;

    @media (min-width: 800px) {
      visibility: visible;
    }
    @media (min-width: 1024px) {
      bottom: 20rem;
    }
  }

  .caretLeft {
    left: 3rem;
  }

  .caretRight {
    right: 3rem;
  }
`;
