import styled from "styled-components";
import imageSelect from "../../assets/icons/ChevronDown.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin: 0 auto;

  .tags {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    gap: 1.6rem;

    margin-top: 1.6rem;

    padding: 8px 8px;

    border-radius: 8px;
    padding-right: 16px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`;

export const Content = styled.div`
  padding: 1rem 3.2rem;
`;

export const Form = styled.div`
  max-width: 112rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .action {
    display: flex;
    justify-content: end;
    
    > button {
      width: 100%;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      @media (min-width: 1024px) {
        width: 17.2rem;
      }
    }
  }

  h1 {
    @media (min-width: 1024px) {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 3.2rem;
    }
  }

  .inputGroup {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    #file-input {
      display: none;
    }

    > .inputWrapper {
      width: 100%;

      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      .uploadFile {
        padding: 0 3.2rem;

        display: flex;
        align-items: center;

        img {
          width: 1.9rem;
          margin-left: 3.2rem;
          margin-right: 8px;
        }

        span {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }

      > input,
      select,
      .uploadFile {
        width: 100%;

        padding: 1.6rem 1.4rem;

        margin-top: 1.6rem;

        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        border: 0;
        border-radius: 0.8rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
      }

      select {
          /* background: url(${imageSelect}) no-repeat; */
        /* background: url("../../assets/icons/ChevronDown.svg") no-repeat right; */

        > svg {
          width: 2rem;
        }
      }

      @media (min-width: 1024px) {
        /* width: 25rem; */
      }
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
