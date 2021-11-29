import React from 'react';
import { useState, useEffect } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const ScrollLimiteY = 500;

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= ScrollLimiteY ? 'open' : 'scrollOpen',
  ];

  const className = classes.join(' ').trim();

  function ToggleActiveMenu() {
    setIsActive((prev) => !prev);
  }

  window.toggleActiveMenu = ToggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
