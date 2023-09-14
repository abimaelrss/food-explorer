import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  margin-top: 164px;

  display: flex;
  align-items: center;
  justify-content: end;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    width: 656px;
    height: 412px;

    position: absolute;
    left: -70px;
    bottom: -20px;
  }

  .sabores {
    margin-right: 100px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;
`;
