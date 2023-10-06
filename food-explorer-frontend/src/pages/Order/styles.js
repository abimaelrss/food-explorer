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

  
  font-family: "Poppins", sans-serif;
  
  @media (min-width: 1024px) {
  }
  
  main {
    display: flex;

    margin-top: 3.4rem;

    .order {
      width: 40%;
    }

    .payment {
      width: 60%;
    }
  }

`;
