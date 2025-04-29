import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

// Header Section
const HeaderSection = styled(Section)`
  text-align: center;
  padding-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Privacy Content
const PrivacyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 16px;
  
  .light-theme & {
    background-color: #f5f5f7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const LastUpdated = styled.div`
  margin-bottom: 2rem;
  font-style: italic;
  
  .light-theme & {
    color: #6e6e73;
  }
  
  .dark-theme & {
    color: #a1a1a6;
  }
`;

const PrivacySection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const Privacy = () => {
  const { t } = useTranslation();
  
  return (
    <PrivacyContainer>
      <HeaderSection>
        <Container>
          <PageTitle>{t('legal.privacy.title')}</PageTitle>
          <PageSubtitle>{t('legal.privacy.subtitle')}</PageSubtitle>
        </Container>
      </HeaderSection>
      
      <Section>
        <Container>
          <PrivacyContent>
            <LastUpdated>
              <p>{t('legal.privacy.lastUpdated')}</p>
            </LastUpdated>
            
            <PrivacySection>
              <h2>{t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>{t('legal.privacy.sections.collection.title')}</h2>
              
              <h3>{t('legal.privacy.sections.collection.personalInfo.title')}</h3>
              <p>{t('legal.privacy.sections.collection.personalInfo.content')}</p>
              <ul>
                {t('legal.privacy.sections.collection.personalInfo.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('legal.privacy.sections.collection.personalInfo.additional')}</p>
              <ul>
                {t('legal.privacy.sections.collection.personalInfo.items2', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </PrivacySection>
            
            {/* Additional sections would be added here */}
            <PrivacySection>
              <h2>3. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>4. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>5. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>6. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>7. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
            
            <PrivacySection>
              <h2>8. {t('legal.privacy.sections.intro.title')}</h2>
              <p>{t('legal.privacy.sections.intro.content')}</p>
              <p>{t('legal.privacy.sections.intro.additional')}</p>
            </PrivacySection>
          </PrivacyContent>
        </Container>
      </Section>
    </PrivacyContainer>
  );
};

export default Privacy;