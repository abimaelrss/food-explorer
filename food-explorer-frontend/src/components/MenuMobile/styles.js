import styled from "styled-components";

export const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 100vh;

  z-index: 1000;

  transform: ${(props) =>
    props.$visible ? "translateX(0)" : "translateX(-600px)"};

  transition: 300ms all ease-out;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  header {
    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    .buttonMenu {
      width: 2.4rem;
      background: none;
      border: none;

      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  main {
    padding: 3.6rem 2.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    button {
      width: 100%;
      background: none;

      border: none;
      border-bottom: solid 1px;
      border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};

      padding: 1rem;

      font-family: "Poppins", sans-serif;
      font-weight: 300;
      font-size: 2.4rem;

      display: flex;
      flex-direction: column;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    button:nth-child(2) {
      margin-top: 3.6rem;
    }
  }
`;
