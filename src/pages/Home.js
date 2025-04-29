import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const HomeContainer = styled.div`
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

// Hero Section
const HeroSection = styled(Section)`
  padding: 5rem 0;
`;

const HeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #007AFF, #FF9500);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-align: center;
  background-color: #0071e3;
  color: white;
  
  &:hover {
    background-color: #0077ed;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid #d2d2d7;
  text-align: center;
  background-color: transparent;
  color: #1d1d1f;
  
  .dark-theme & {
    border-color: #2d2d2f;
    color: #f5f5f7;
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
    
    .dark-theme & {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

// Features Section
const FeaturesSection = styled(Section)``;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .light-theme & {
    background-color: #f5f5f7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:hover {
    transform: translateY(-5px);
    
    .light-theme & {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
    
    .dark-theme & {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #007AFF, #5AC8FA);
  color: white;
`;

// About Section
const AboutSection = styled(Section)``;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  @media (max-width: 992px) {
    text-align: center;
  }
  
  h2 {
    margin-bottom: 0.5rem;
  }
  
  h3 {
    margin-bottom: 1.5rem;
    
    .light-theme & {
      color: #6e6e73;
    }
    
    .dark-theme & {
      color: #a1a1a6;
    }
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  .btn {
    margin-top: 1.5rem;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

// Products Preview Section
const ProductsPreviewSection = styled(Section)``;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  padding: 2rem;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  .light-theme & {
    background-color: #f5f5f7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:hover {
    transform: translateY(-5px);
    
    .light-theme & {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
    
    .dark-theme & {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }
  }
`;

const ProductIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF2D55, #FF9500);
  color: white;
`;

const CTACenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

// How to Order Section
const HowToOrderSection = styled(Section)``;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  
  .light-theme & {
    color: #0071e3;
  }
  
  .dark-theme & {
    color: #2997ff;
  }
`;

const StepContent = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;

// Stats Section
const StatsSection = styled(Section)`
  background: linear-gradient(135deg, #007AFF, #5AC8FA);
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const StatTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

// FAQ Preview Section
const FAQPreviewSection = styled(Section)``;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  .light-theme & {
    background-color: #f5f5f7;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  &.active {
    .faq-toggle {
      transform: rotate(45deg);
    }
    
    .faq-answer {
      max-height: 500px;
      padding: 0 1.5rem 1.5rem;
    }
  }
`;

const FAQQuestion = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  h3 {
    margin-bottom: 0;
    font-size: 1.25rem;
    
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

const FAQToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  .light-theme & {
    color: #1d1d1f;
  }
  
  .dark-theme & {
    color: #f5f5f7;
  }
`;

const FAQAnswer = styled.div`
  padding: 0 1.5rem 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

// CTA Section
const CTASection = styled(Section)`
  background: linear-gradient(135deg, #5856D6, #FF2D55);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    
    @media (max-width: 576px) {
      font-size: 1.75rem;
    }
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  text-align: center;
  background-color: white;
  color: #1d1d1f;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
`;

const Home = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>{t('home.hero.title')}</HeroTitle>
            <HeroSubtitle>{t('home.hero.subtitle')}</HeroSubtitle>
            <CTAButtons>
              <PrimaryButton to="/products">{t('home.hero.cta1')}</PrimaryButton>
              <SecondaryButton to="/contact">{t('home.hero.cta2')}</SecondaryButton>
            </CTAButtons>
          </HeroContent>
          <HeroImage>
            <img src="/images/banner1.png" alt="NSDEV ACCOUNT Banner" />
          </HeroImage>
        </HeroContainer>
      </HeroSection>
      
      {/* Features Section */}
      <FeaturesSection>
        <Container>
          <SectionHeader>
            <h2>{t('home.features.title')}</h2>
          </SectionHeader>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-bolt"></i>
              </FeatureIcon>
              <h3>{t('home.features.feature1.title')}</h3>
              <p>{t('home.features.feature1.description')}</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-shield-alt"></i>
              </FeatureIcon>
              <h3>{t('home.features.feature2.title')}</h3>
              <p>{t('home.features.feature2.description')}</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-hands-helping"></i>
              </FeatureIcon>
              <h3>{t('home.features.feature3.title')}</h3>
              <p>{t('home.features.feature3.description')}</p>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      {/* About Section */}
      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <h2>{t('home.about.title')}</h2>
              <h3>{t('home.about.subtitle')}</h3>
              <p>{t('home.about.description1')}</p>
              <p>{t('home.about.description2')}</p>
              <PrimaryButton to="/contact">{t('home.about.cta')}</PrimaryButton>
            </AboutText>
            <AboutImage>
              <img src="/images/banner2.png" alt="NSDEV ACCOUNT About" />
            </AboutImage>
          </AboutContent>
        </Container>
      </AboutSection>
      
      {/* Products Preview Section */}
      <ProductsPreviewSection>
        <Container>
          <SectionHeader>
            <h2>{t('home.products.title')}</h2>
            <p>{t('home.products.subtitle')}</p>
          </SectionHeader>
          <ProductsGrid>
            <ProductCard>
              <ProductIcon>
                <i className="fas fa-user-shield"></i>
              </ProductIcon>
              <h3>{t('home.products.product1.title')}</h3>
              <p>{t('home.products.product1.description')}</p>
            </ProductCard>
            <ProductCard>
              <ProductIcon>
                <i className="fas fa-mobile-alt"></i>
              </ProductIcon>
              <h3>{t('home.products.product2.title')}</h3>
              <p>{t('home.products.product2.description')}</p>
            </ProductCard>
            <ProductCard>
              <ProductIcon>
                <i className="fas fa-code"></i>
              </ProductIcon>
              <h3>{t('home.products.product3.title')}</h3>
              <p>{t('home.products.product3.description')}</p>
            </ProductCard>
          </ProductsGrid>
          <CTACenter>
            <PrimaryButton to="/products">{t('home.products.cta')}</PrimaryButton>
          </CTACenter>
        </Container>
      </ProductsPreviewSection>
      
      {/* How to Order Section */}
      <HowToOrderSection>
        <Container>
          <SectionHeader>
            <h2>{t('home.howToOrder.title')}</h2>
            <p>{t('home.howToOrder.subtitle')}</p>
          </SectionHeader>
          <StepsContainer>
            <Step>
              <StepNumber>01</StepNumber>
              <StepContent>
                <h3>{t('home.howToOrder.step1.title')}</h3>
                <p>{t('home.howToOrder.step1.description')}</p>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>02</StepNumber>
              <StepContent>
                <h3>{t('home.howToOrder.step2.title')}</h3>
                <p>{t('home.howToOrder.step2.description')}</p>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>03</StepNumber>
              <StepContent>
                <h3>{t('home.howToOrder.step3.title')}</h3>
                <p>{t('home.howToOrder.step3.description')}</p>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>04</StepNumber>
              <StepContent>
                <h3>{t('home.howToOrder.step4.title')}</h3>
                <p>{t('home.howToOrder.step4.description')}</p>
              </StepContent>
            </Step>
          </StepsContainer>
        </Container>
      </HowToOrderSection>
      
      {/* Stats Section */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber data-count="1000">0</StatNumber>
              <StatTitle>{t('home.stats.developerAccounts')}</StatTitle>
            </StatCard>
            <StatCard>
              <StatNumber data-count="50">0+</StatNumber>
              <StatTitle>{t('home.stats.differentCountries')}</StatTitle>
            </StatCard>
            <StatCard>
              <StatNumber data-count="4">0+</StatNumber>
              <StatTitle>{t('home.stats.yearsExperience')}</StatTitle>
            </StatCard>
            <StatCard>
              <StatNumber data-count="100">0%</StatNumber>
              <StatTitle>{t('home.stats.responseGuarantee')}</StatTitle>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>
      
      {/* FAQ Preview Section */}
      <FAQPreviewSection>
        <Container>
          <SectionHeader>
            <h2>{t('home.faq.title')}</h2>
          </SectionHeader>
          <FAQContainer>
            <FAQItem className={activeIndex === 0 ? 'active' : ''}>
              <FAQQuestion onClick={() => toggleFAQ(0)}>
                <h3>{t('home.faq.question1.title')}</h3>
                <FAQToggle className="faq-toggle">+</FAQToggle>
              </FAQQuestion>
              <FAQAnswer className="faq-answer">
                <p>{t('home.faq.question1.answer')}</p>
              </FAQAnswer>
            </FAQItem>
            <FAQItem className={activeIndex === 1 ? 'active' : ''}>
              <FAQQuestion onClick={() => toggleFAQ(1)}>
                <h3>{t('home.faq.question2.title')}</h3>
                <FAQToggle className="faq-toggle">+</FAQToggle>
              </FAQQuestion>
              <FAQAnswer className="faq-answer">
                <p>{t('home.faq.question2.answer')}</p>
              </FAQAnswer>
            </FAQItem>
            <FAQItem className={activeIndex === 2 ? 'active' : ''}>
              <FAQQuestion onClick={() => toggleFAQ(2)}>
                <h3>{t('home.faq.question3.title')}</h3>
                <FAQToggle className="faq-toggle">+</FAQToggle>
              </FAQQuestion>
              <FAQAnswer className="faq-answer">
                <p>{t('home.faq.question3.answer')}</p>
              </FAQAnswer>
            </FAQItem>
          </FAQContainer>
          <CTACenter>
            <SecondaryButton to="/faq">{t('home.faq.viewAllFaq')}</SecondaryButton>
          </CTACenter>
        </Container>
      </FAQPreviewSection>
      
      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <CTAButton to="/products">{t('home.cta.button')}</CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;