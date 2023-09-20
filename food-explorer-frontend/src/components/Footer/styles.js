import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1122px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

  margin-top: 2.5rem;
  padding: 3rem 2.8rem;

  @media (min-width: 1024px) {
    margin-top: 4.8rem;
  }
`;

export const Component = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  @media (min-width: 425px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 2.2rem;
      margin-right: 1rem;

      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    > h2 {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;

      @media (min-width: 800px) {
        font-size: 2.4rem;
      }
    }
  }

  .subtitle {
    font-family: "DM Sans", sans-serif;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    @media (min-width: 800px) {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 600px) {
    padding: 0 8rem;
  }

  @media (min-width: 800px) {
    padding: 0 12.3rem;
  }
`;
