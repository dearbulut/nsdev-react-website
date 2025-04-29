import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50px;
  transition: background-color 0.2s ease;

  @media (max-width: 480px) {
    padding: 6px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .dark-theme & {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const LanguageFlag = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 0.9em;
  }
`;

const LanguageText = styled.span`
  font-weight: 500;
  font-size: 14px;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 180px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 100;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  animation: fadeIn 0.3s ease forwards;
  
  @media (max-width: 480px) {
    width: 150px;
    right: -10px;
  }

  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 16px;
    width: 12px;
    height: 12px;
    background-color: inherit;
    transform: rotate(45deg);
    
    @media (max-width: 480px) {
      right: 20px;
    }
  }
`;

const LanguageOption = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: 10px 12px;
  }

  &:hover {
    background-color: #f5f5f7;
  }

  &.active {
    font-weight: 600;
    background-color: #f5f5f7;
  }

  .dark-theme & {
    &:hover {
      background-color: #2d2d2f;
    }

    &.active {
      background-color: #2d2d2f;
    }
  }
`;

const languages = [
  { code: 'tr', name: 'Türkçe', flag: 'fi fi-tr' },
  { code: 'en', name: 'English', flag: 'fi fi-gb' },
  { code: 'de', name: 'Deutsch', flag: 'fi fi-de' },
  { code: 'ru', name: 'Русский', flag: 'fi fi-ru' },
  { code: 'zh', name: '中文', flag: 'fi fi-cn' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <LanguageFlag className={currentLanguage.flag} />
        <LanguageText>{currentLanguage.code.toUpperCase()}</LanguageText>
      </LanguageButton>
      <DropdownMenu isOpen={isOpen}>
        {languages.map((language) => (
          <LanguageOption
            key={language.code}
            className={i18n.language === language.code ? 'active' : ''}
            onClick={() => changeLanguage(language.code)}
          >
            <LanguageFlag className={language.flag} />
            <LanguageText>{language.name}</LanguageText>
          </LanguageOption>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default LanguageSelector;