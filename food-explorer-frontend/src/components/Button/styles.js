import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  padding: 1.2rem 2.4rem;

  border: 0;
  border-radius: 0.5rem;

  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  font-weight: 300;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme, $actived }) =>
    $actived ? theme.COLORS.TINTS_TOMATO_100 : theme.COLORS.TINTS_TOMATO_400};

  &:hover {
    background-color: ${({ theme, $actived }) =>
      $actived && theme.COLORS.TINTS_TOMATO_200};
  }

  > img {
    width: 3.2rem;
    padding-right: 0.8rem;

    @media (min-width: 800px) {
      display: none;
    }
  }

  @media (min-width: 800px) {
    max-width: 17.2rem;
  }
`;
