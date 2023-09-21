import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2.4rem;

  font-family: "Poppins", sans-serif;

  position: relative;

  
  button {
    /* width: 100%; */
    border: none;
    background: none;
    
    position: absolute;
    bottom: 13rem;

    visibility: hidden;
    
    @media (min-width: 800px) {
      visibility: visible;
    }
  }

  .caretLeft {
    left: 3rem;
  }

  .caretRight {
    right: 3rem;
  }
`;
