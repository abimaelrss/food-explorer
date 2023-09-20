import styled from "styled-components";

export const Container = styled.header`
  /* width: 100%; */
  display: flex;
  margin-right: 8rem;

  /* position: absolute; */

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  .btn1 {
    width: 2.4rem;
    background: none;
    border: none;
  }

  .btn1:active {
    display: none;
  }

  .btn2 {
    display: none;
  }

  p {
    display: none;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

