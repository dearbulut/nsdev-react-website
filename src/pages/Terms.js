import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const TermsContainer = styled.div`
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

// Terms Content
const TermsContent = styled.div`
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

const TermsSection = styled.div`
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

const Terms = () => {
  const { t } = useTranslation();
  
  return (
    <TermsContainer>
      <HeaderSection>
        <Container>
          <PageTitle>{t('legal.terms.title')}</PageTitle>
          <PageSubtitle>{t('legal.terms.subtitle')}</PageSubtitle>
        </Container>
      </HeaderSection>
      
      <Section>
        <Container>
          <TermsContent>
            <LastUpdated>
              <p>{t('legal.terms.lastUpdated')}</p>
            </LastUpdated>
            
            <TermsSection>
              <h2>{t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>{t('legal.terms.sections.services.title')}</h2>
              <p>{t('legal.terms.sections.services.content')}</p>
              <ul>
                {t('legal.terms.sections.services.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>{t('legal.terms.sections.services.additional')}</p>
            </TermsSection>
            
            {/* Additional sections would be added here */}
            <TermsSection>
              <h2>3. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>4. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>5. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>6. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>7. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>8. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>9. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
            
            <TermsSection>
              <h2>10. {t('legal.terms.sections.intro.title')}</h2>
              <p>{t('legal.terms.sections.intro.content')}</p>
            </TermsSection>
          </TermsContent>
        </Container>
      </Section>
    </TermsContainer>
  );
};

export default Terms;