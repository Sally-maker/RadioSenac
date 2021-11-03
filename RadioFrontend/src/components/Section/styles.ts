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

  &:nth-child(1) {
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
export const Navegation = styled.div`
  position: absolute;
`;
export const Content_Main = styled.div``;
export const Header = styled.header``;
