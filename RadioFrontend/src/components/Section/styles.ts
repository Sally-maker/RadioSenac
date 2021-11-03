import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;

export const LogoRadio = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  align-items: center;
`;
export const Navegation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  h1 {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }

  button {
    padding: 10px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: var(--twitter);
    }
  }
`;
export const Main = styled.div``;
export const Content_Main = styled.div``;
export const Header = styled.header``;
