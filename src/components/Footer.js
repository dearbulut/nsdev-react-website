import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 3rem 0 1.5rem;
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 2.5rem 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 1rem;
  }
  
  &.light-theme {
    background-color: #f5f5f7;
    border-top: 1px solid #d2d2d7;
  }
  
  &.dark-theme {
    background-color: #1d1d1f;
    border-top: 1px solid #2d2d2f;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FooterLogo = styled.div`
  img {
    height: 40px;
    width: auto;
    margin-bottom: 1rem;
    
    @media (max-width: 480px) {
      height: 35px;
      margin-bottom: 0.5rem;
    }
  }
  
  p {
    margin-bottom: 0;
    
    &.light-theme {
      color: #6e6e73;
    }
    
    &.dark-theme {
      color: #a1a1a6;
    }
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    font-weight: 600;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    
    @media (max-width: 480px) {
      margin-bottom: 0.4rem;
    }
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
    padding: 0.25rem 0;
    
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
    
    &.light-theme {
      color: #1d1d1f;
      
      &:hover {
        color: #0071e3;
      }
    }
    
    &.dark-theme {
      color: #f5f5f7;
      
      &:hover {
        color: #2997ff;
      }
    }
    
    i {
      width: 20px;
      text-align: center;
      font-size: 1.1em;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  
  @media (max-width: 480px) {
    padding-top: 1rem;
  }
  
  &.light-theme {
    border-top: 1px solid #d2d2d7;
  }
  
  &.dark-theme {
    border-top: 1px solid #2d2d2f;
  }
  
  p {
    margin-bottom: 0;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
    
    &.light-theme {
      color: #6e6e73;
    }
    
    &.dark-theme {
      color: #a1a1a6;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();
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
  
  return (
    <FooterContainer className={`${theme}-theme`}>
      <FooterContent>
        <FooterGrid>
          <FooterLogo>
            <img src="/logo.png" alt="NSDEV ACCOUNT Logo" />
            <p className={`${theme}-theme`}>Premium Developer Accounts</p>
          </FooterLogo>
          
          <FooterSection>
            <h3>{t('footer.quickLinks')}</h3>
            <ul>
              <li>
                <Link to="/" className={`${theme}-theme`}>
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className={`${theme}-theme`}>
                  {t('header.products')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className={`${theme}-theme`}>
                  {t('header.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`${theme}-theme`}>
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>{t('footer.legal')}</h3>
            <ul>
              <li>
                <Link to="/terms" className={`${theme}-theme`}>
                  {t('footer.termsConditions')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className={`${theme}-theme`}>
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>{t('footer.contactUs')}</h3>
            <ul>
              <li>
                <a href="#" className={`${theme}-theme`}>
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className={`${theme}-theme`}>
                  <i className="fab fa-telegram"></i> Telegram
                </a>
              </li>
              <li>
                <a href="#" className={`${theme}-theme`}>
                  <i className="fab fa-skype"></i> Skype
                </a>
              </li>
              <li>
                <a href="#" className={`${theme}-theme`}>
                  <i className="fab fa-weixin"></i> WeChat
                </a>
              </li>
            </ul>
          </FooterSection>
        </FooterGrid>
        
        <FooterBottom className={`${theme}-theme`}>
          <p className={`${theme}-theme`}>{t('footer.copyright')}</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;