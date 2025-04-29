import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProductsContainer = styled.div`
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

// Filter Section
const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
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
`;

// Products Grid
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProductCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
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

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ProductCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProductContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
`;

const ProductDescription = styled.p`
  margin-bottom: 1.5rem;
  
  .light-theme & {
    color: #6e6e73;
  }
  
  .dark-theme & {
    color: #a1a1a6;
  }
`;

const ProductFeatures = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  flex: 1;
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    
    &::before {
      content: '\\f00c';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      left: -1.5rem;
      color: #0071e3;
      
      .dark-theme & {
        color: #2997ff;
      }
    }
  }
`;

const ProductCTA = styled.div`
  margin-top: auto;
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
  border: 1px solid #0071e3;
  text-align: center;
  background-color: transparent;
  color: #0071e3;
  
  .dark-theme & {
    border-color: #2997ff;
    color: #2997ff;
  }
  
  &:hover {
    background-color: #0071e3;
    color: white;
    transform: translateY(-2px);
    
    .dark-theme & {
      background-color: #2997ff;
    }
  }
`;

// Custom Solution Section
const CustomSolutionSection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #007AFF, #5AC8FA);
  color: white;
  border-radius: 16px;
  margin-top: 3rem;
`;

const CustomSolutionContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CustomSolutionButton = styled(Link)`
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
  color: #007AFF;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
`;

const Products = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const products = [
    {
      id: 1,
      image: '/images/banner1.png',
      title: t('products.product1.title'),
      description: t('products.product1.description'),
      features: t('products.product1.features', { returnObjects: true }),
      cta: t('products.product1.cta')
    },
    {
      id: 2,
      image: '/images/banner2.png',
      title: t('products.product2.title'),
      description: t('products.product2.description'),
      features: t('products.product2.features', { returnObjects: true }),
      cta: t('products.product2.cta')
    },
    {
      id: 3,
      image: '/images/banner3.png',
      title: t('products.product3.title'),
      description: t('products.product3.description'),
      features: t('products.product3.features', { returnObjects: true }),
      cta: t('products.product3.cta')
    },
    {
      id: 4,
      image: '/images/banner1.png',
      title: t('products.product4.title'),
      description: t('products.product4.description'),
      features: t('products.product4.features', { returnObjects: true }),
      cta: t('products.product4.cta')
    },
    {
      id: 5,
      image: '/images/banner2.png',
      title: t('products.product5.title'),
      description: t('products.product5.description'),
      features: t('products.product5.features', { returnObjects: true }),
      cta: t('products.product5.cta')
    },
    {
      id: 6,
      image: '/images/banner3.png',
      title: t('products.product6.title'),
      description: t('products.product6.description'),
      features: t('products.product6.features', { returnObjects: true }),
      cta: t('products.product6.cta')
    }
  ];
  
  return (
    <ProductsContainer>
      <HeaderSection>
        <Container>
          <PageTitle>{t('products.title')}</PageTitle>
          <PageSubtitle>{t('products.subtitle')}</PageSubtitle>
        </Container>
      </HeaderSection>
      
      <Section>
        <Container>
          <FilterSection>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              {t('products.filter.all')}
            </FilterButton>
          </FilterSection>
          
          <ProductsGrid>
            {products.map(product => (
              <ProductCard key={product.id}>
                <ProductImage>
                  <img src={product.image} alt={product.title} />
                </ProductImage>
                <ProductContent>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductDescription>{product.description}</ProductDescription>
                  <ProductFeatures>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ProductFeatures>
                  <ProductCTA>
                    <CTAButton to="/contact">{product.cta}</CTAButton>
                  </ProductCTA>
                </ProductContent>
              </ProductCard>
            ))}
          </ProductsGrid>
          
          <CustomSolutionSection>
            <CustomSolutionContent>
              <h2>{t('products.customSolution.title')}</h2>
              <p>{t('products.customSolution.description')}</p>
              <CustomSolutionButton to="/contact">
                {t('products.customSolution.cta')}
              </CustomSolutionButton>
            </CustomSolutionContent>
          </CustomSolutionSection>
        </Container>
      </Section>
    </ProductsContainer>
  );
};

export default Products;