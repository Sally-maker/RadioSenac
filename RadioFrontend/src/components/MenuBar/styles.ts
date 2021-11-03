import styled, { css } from 'styled-components';

import {
  Person,
  Home,
  CategoryAlt,
  Favorite,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;
  flex: 3;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 95px;
  margin: 10px;
  margin-bottom: 70px;
  border-radius: 50px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border: 0;
  background: transparent;

  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }
    padding-right: 15px;
  }
  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 70px;
  }

  & + button:last-child {
    margin-top: 70px;
    width: 40px;
    height: 40px;
    > span {
      display: none;
    }
    @media (min-width: 1280px) {
      width: 50%;
      height: unset;
      > span {
        display: inline;
      }
    }
  }
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background: var(--white);
    opacity: 50%;
    transition: 1s;
  }

  span,
  svg {
    background: none;
    color: var(--twitter);
    fill: var(--twitter);
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 34px;
  height: 34px;
  color: var(--white);
  background: transparent;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(Favorite)`
  ${iconCSS}
`;

export const CategoryAltIcon = styled(CategoryAlt)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const BotBar = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
    > p {
      color: var(--white);
    }
    > span {
      color: var(--radio-dark-hover);
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
