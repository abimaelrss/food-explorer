import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  /* margin-bottom: 4.8rem; */

  font-family: "Poppins", sans-serif;

  position: relative;

  > button {
    border: none;
    background: none;

    position: absolute;
    bottom: 13rem;

    visibility: hidden;

    @media (min-width: 1024px) {
      visibility: visible;
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
