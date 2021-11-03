import React from 'react';

import LogoRadio from '../../assets/LogoRadioSenac.jpg';

import {
  Container,
  SideBar,
  Logo,
  MenuButton,
  HomeIcon,
  FavoriteIcon,
  CategoryAltIcon,
  ProfileIcon,
  BotBar,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoRadio} />
      <SideBar>
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton>
          <CategoryAltIcon />
          <span>Categorias</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
      </SideBar>

      <BotBar>
        <Avatar />
        <ProfileData>
          <p>Gabriel Barbosa</p>
          <span>@Gabriel</span>
        </ProfileData>
        <ExitIcon />
      </BotBar>
    </Container>
  );
};

export { MenuBar };
