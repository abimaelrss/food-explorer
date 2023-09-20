import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.div`
  padding: 0 3.2rem;
  max-width: 550px;
  margin: 1rem auto;

  button {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;
  }

  > label {
    margin-bottom: 1.6rem;
  }
`;
