import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;
  padding-top: 48px;

  display: flex;
  align-items: center;
  gap: 24px;

  position: relative;

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    position: absolute;
    top: 0;
    left: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;