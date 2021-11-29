import styled from 'styled-components';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--radio-light-hover);
    --text-color: var(--dark-blue);
  }
  &.orange {
    --bg-color: var(--twitter);
    --text-color: var(--radio-dark-hover);
  }
  &.black {
    --bg-color: var(--white);
    --text-color: var(--primary);
  }
  &.white {
    --bg-color: var(--primary);
    --text-color: var(--white);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --heading-font-size: 71px;
      --content-width: 50%;
    }
  }
  background: var(--bg-color);
  position: relative;
`;

export const LogoRadio = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  align-items: center;
`;
export const Navegation = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: var(--bg-color);
  clip: rect(auto, auto, auto, auto);
`;
export const Header = styled.header`
  z-index: 3;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    color: var(--text-color);
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
export const Content_Main = styled.main`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  > h2 {
    font-size: var(--heading-font-size);
    color: var(--text-color);
    max-width: var(--content-width);
  }
  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
  padding: var(--padding-top) 32px var(--padding-bottom);
`;
