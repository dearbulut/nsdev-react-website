import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
  
  &.light-theme {
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #d2d2d7;
  }
  
  &.dark-theme {
    background-color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #1d1d1f;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
    z-index: 100;
    
    &.light-theme {
      background-color: #ffffff;
      border-bottom: 1px solid #d2d2d7;
    }
    
    &.dark-theme {
      background-color: #000000;
      border-bottom: 1px solid #1d1d1f;
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &.light-theme {
    color: #1d1d1f;
    
    &:hover, &.active {
      color: #0071e3;
    }
    
    &.active::after {
      background-color: #0071e3;
    }
  }
  
  &.dark-theme {
    color: #f5f5f7;
    
    &:hover, &.active {
      color: #2997ff;
    }
    
    &.active::after {
      background-color: #2997ff;
    }
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    transition: transform 0.2s ease;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &.light-theme {
    color: #1d1d1f;
  }
  
  &.dark-theme {
    color: #f5f5f7;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    
    window.addEventListener('storage', handleThemeChange);
    document.addEventListener('themeChanged', handleThemeChange);
    
    return () => {
      window.removeEventListener('storage', handleThemeChange);
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <HeaderContainer className={`${theme}-theme`}>
      <NavContainer>
        <Logo to="/">
          <img src="/logo.png" alt="NSDEV ACCOUNT Logo" />
        </Logo>
        
        <NavLinks isOpen={isMenuOpen} className={`${theme}-theme`}>
          <NavLink 
            to="/" 
            className={`${theme}-theme ${location.pathname === '/' ? 'active' : ''}`}
          >
            {t('header.home')}
          </NavLink>
          <NavLink 
            to="/products" 
            className={`${theme}-theme ${location.pathname === '/products' ? 'active' : ''}`}
          >
            {t('header.products')}
          </NavLink>
          <NavLink 
            to="/faq" 
            className={`${theme}-theme ${location.pathname === '/faq' ? 'active' : ''}`}
          >
            {t('header.faq')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={`${theme}-theme ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            {t('header.contact')}
          </NavLink>
        </NavLinks>
        
        <NavActions>
          <LanguageSelector />
          <ThemeToggle />
          <MobileMenuButton 
            onClick={toggleMenu} 
            aria-label="Toggle mobile menu"
            className={`${theme}-theme`}
          >
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </MobileMenuButton>
        </NavActions>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;