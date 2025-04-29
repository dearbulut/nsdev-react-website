import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #007AFF, #5AC8FA);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.5s ease-in-out;
  padding: 15px;
  box-sizing: border-box;
`;

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.5s ease-in-out 0.2s both;
  overflow-y: auto;
  max-height: 90vh;

  @media (max-width: 768px) {
    padding: 30px 20px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
    border-radius: 15px;
  }
`;

const Logo = styled.img`
  height: 60px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    height: 50px;
    margin-bottom: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #1d1d1f;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #6e6e73;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 20px;
  }
`;

const LanguageOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  @media (min-width: 769px) {
    flex-direction: column;
    padding: 20px;
  }
  
  &:hover {
    background-color: rgba(0, 113, 227, 0.05);
  }
  
  &.selected {
    border-color: #007AFF;
    background-color: rgba(0, 113, 227, 0.1);
  }
`;

const Flag = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-right: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (min-width: 769px) {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`;

const LanguageName = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContinueButton = styled.button`
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  
  &:hover {
    background-color: #0062CC;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #A1A1A6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 480px) {
    padding: 10px 25px;
    font-size: 1rem;
  }
`;

const languages = [
  { code: 'tr', name: 'Türkçe', flag: 'fi fi-tr' },
  { code: 'en', name: 'English', flag: 'fi fi-gb' },
  { code: 'de', name: 'Deutsch', flag: 'fi fi-de' },
  { code: 'ru', name: 'Русский', flag: 'fi fi-ru' },
  { code: 'zh', name: '中文', flag: 'fi fi-cn' }
];

const LanguageSelectionScreen = ({ onComplete }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'tr');

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
    i18n.changeLanguage(code);
  };

  const handleContinue = () => {
    localStorage.setItem('i18nextLng', selectedLanguage);
    localStorage.setItem('languageSelected', 'true');
    onComplete();
  };

  return (
    <Container>
      <Content>
        <Logo src="/logo.png" alt="NSDEV ACCOUNT Logo" />
        <Title>{t('languageSelection.title')}</Title>
        <Subtitle>{t('languageSelection.subtitle')}</Subtitle>
        
        <LanguageGrid>
          {languages.map((language) => (
            <LanguageOption
              key={language.code}
              className={selectedLanguage === language.code ? 'selected' : ''}
              onClick={() => handleLanguageSelect(language.code)}
            >
              <Flag className={language.flag} />
              <LanguageName>{language.name}</LanguageName>
            </LanguageOption>
          ))}
        </LanguageGrid>
        
        <ContinueButton onClick={handleContinue}>
          {t('languageSelection.continue')}
        </ContinueButton>
      </Content>
    </Container>
  );
};

export default LanguageSelectionScreen;