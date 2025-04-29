import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FAQContainer = styled.div`
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

// Categories Section
const CategoriesSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background-color: ${props => props.active ? '#0071e3' : 'transparent'};
  color: ${props => props.active ? 'white' : 'inherit'};
  
  .dark-theme & {
    background-color: ${props => props.active ? '#2997ff' : 'transparent'};
  }
  
  &:hover {
    background-color: ${props => props.active ? '#0071e3' : 'rgba(0, 0, 0, 0.05)'};
    
    .dark-theme & {
      background-color: ${props => props.active ? '#2997ff' : 'rgba(255, 255, 255, 0.1)'};
    }
  }
  
  @media (max-width: 576px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

// FAQ Items
const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-radius: 12px;
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
    .light-theme & {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    
    .dark-theme & {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }
    
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

const FAQ = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  
  const categories = [
    { id: 'all', label: t('faq.categories.all') },
    { id: 'accounts', label: t('faq.categories.accounts') },
    { id: 'payment', label: t('faq.categories.payment') },
    { id: 'delivery', label: t('faq.categories.delivery') },
    { id: 'support', label: t('faq.categories.support') }
  ];
  
  // Get all questions from translation
  const allQuestions = Object.keys(t('faq.questions', { returnObjects: true })).map(key => {
    const question = t(`faq.questions.${key}`, { returnObjects: true });
    return {
      id: key,
      category: question.category,
      question: question.question,
      answer: question.answer
    };
  });
  
  // Filter questions based on active category
  const filteredQuestions = activeCategory === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.category === activeCategory);
  
  return (
    <FAQContainer>
      <HeaderSection>
        <Container>
          <PageTitle>{t('faq.title')}</PageTitle>
          <PageSubtitle>{t('faq.subtitle')}</PageSubtitle>
        </Container>
      </HeaderSection>
      
      <Section>
        <Container>
          <CategoriesSection>
            {categories.map(category => (
              <CategoryButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </CategoryButton>
            ))}
          </CategoriesSection>
          
          <FAQList>
            {filteredQuestions.map((faq, index) => (
              <FAQItem 
                key={faq.id} 
                className={activeIndex === index ? 'active' : ''}
              >
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <FAQToggle className="faq-toggle">+</FAQToggle>
                </FAQQuestion>
                <FAQAnswer className="faq-answer">
                  <p>{faq.answer}</p>
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </Container>
      </Section>
    </FAQContainer>
  );
};

export default FAQ;