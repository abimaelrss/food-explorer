import styled from "styled-components";

export const Container = styled.section`
  width: 304px;
  height: 462px;

  text-align: center;

  padding: 24px;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > img, h2, p {
    margin-bottom: 15px;
    text-align: center;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #favorite {
    position: absolute;
    top: 16px;
    right: 18px;
  }
`;
