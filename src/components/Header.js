import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.8rem 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
  width: 100%;
  
  &.light-theme {
    background-color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid #d2d2d7;
  }
  
  &.dark-theme {
    background-color: rgba(0, 0, 0, 0.9);
    border-bottom: 1px solid #1d1d1f;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  z-index: 101;
  
  img {
    height: 40px;
    width: auto;
    
    @media (max-width: 480px) {
      height: 32px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 5rem 2rem 2rem;
    z-index: 100;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    &.light-theme {
      background-color: rgba(255, 255, 255, 0.98);
    }
    
    &.dark-theme {
      background-color: rgba(0, 0, 0, 0.98);
    }
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
  }
  
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
    
    @media (max-width: 768px) {
      bottom: 0;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 101;
  
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5rem;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem;
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
  const navRef = useRef(null);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    
    window.addEventListener('storage', handleThemeChange);
    document.addEventListener('themeChanged', handleThemeChange);
    
    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    // Close menu when route changes
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('storage', handleThemeChange);
      document.removeEventListener('themeChanged', handleThemeChange);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <HeaderContainer className={`${theme}-theme`}>
      <NavContainer ref={navRef}>
        <Logo to="/">
          <img src="/logo.png" alt="NSDEV ACCOUNT Logo" />
        </Logo>
        
        <NavLinks isOpen={isMenuOpen} className={`${theme}-theme`}>
          <NavLink 
            to="/" 
            className={`${theme}-theme ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleNavLinkClick}
          >
            {t('header.home')}
          </NavLink>
          <NavLink 
            to="/products" 
            className={`${theme}-theme ${location.pathname === '/products' ? 'active' : ''}`}
            onClick={handleNavLinkClick}
          >
            {t('header.products')}
          </NavLink>
          <NavLink 
            to="/faq" 
            className={`${theme}-theme ${location.pathname === '/faq' ? 'active' : ''}`}
            onClick={handleNavLinkClick}
          >
            {t('header.faq')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={`${theme}-theme ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={handleNavLinkClick}
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