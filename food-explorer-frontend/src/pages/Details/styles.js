import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Content = styled.div`
width: 100%;
  margin: 0 auto;
  padding: 28px 123px;


  display: flex;
  flex-direction: column;

  > button:first-child {

  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`;