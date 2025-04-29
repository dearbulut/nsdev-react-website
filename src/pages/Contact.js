import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

// Contact Content
const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Contact Info
const ContactInfo = styled.div`
  padding: 2rem;
  border-radius: 16px;
  height: 100%;
  
  .light-theme & {
    background-color: #f5f5f7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background-color: #1d1d1f;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const InfoDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  
  .light-theme & {
    color: #6e6e73;
  }
  
  .dark-theme & {
    color: #a1a1a6;
  }
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;
  
  .light-theme & {
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .dark-theme & {
    background-color: #2d2d2f;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:hover {
    transform: translateY(-3px);
    
    .light-theme & {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme & {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const MethodIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  background: linear-gradient(135deg, #007AFF, #5AC8FA);
`;

const MethodText = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
`;

const BusinessHours = styled.div`
  margin-top: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0.5rem;
    
    .light-theme & {
      color: #6e6e73;
    }
    
    .dark-theme & {
      color: #a1a1a6;
    }
  }
  
  .note {
    margin-top: 1rem;
    font-style: italic;
  }
`;

// Contact Form
const ContactForm = styled.div`
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

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  
  .light-theme & {
    border-color: #d2d2d7;
    background-color: white;
    color: #1d1d1f;
    
    &:focus {
      border-color: #0071e3;
      box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
    }
  }
  
  .dark-theme & {
    border-color: #2d2d2f;
    background-color: #2d2d2f;
    color: #f5f5f7;
    
    &:focus {
      border-color: #2997ff;
      box-shadow: 0 0 0 2px rgba(41, 151, 255, 0.2);
    }
  }
  
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: all 0.2s ease;
  
  .light-theme & {
    border-color: #d2d2d7;
    background-color: white;
    color: #1d1d1f;
    
    &:focus {
      border-color: #0071e3;
      box-shadow: 0 0 0 2px rgba(0, 113, 227, 0.2);
    }
  }
  
  .dark-theme & {
    border-color: #2d2d2f;
    background-color: #2d2d2f;
    color: #f5f5f7;
    
    &:focus {
      border-color: #2997ff;
      box-shadow: 0 0 0 2px rgba(41, 151, 255, 0.2);
    }
  }
  
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button`
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
  margin-top: 1rem;
  
  .dark-theme & {
    background-color: #2997ff;
  }
  
  &:hover {
    background-color: #0077ed;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #a1a1a6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: #34c759;
  }
  
  p {
    font-size: 1.1rem;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  return (
    <ContactContainer>
      <HeaderSection>
        <Container>
          <PageTitle>{t('contact.title')}</PageTitle>
          <PageSubtitle>{t('contact.subtitle')}</PageSubtitle>
        </Container>
      </HeaderSection>
      
      <Section>
        <Container>
          <ContactContent>
            <ContactInfo>
              <InfoTitle>{t('contact.info.title')}</InfoTitle>
              <InfoDescription>{t('contact.info.description')}</InfoDescription>
              
              <ContactMethods>
                <ContactMethod>
                  <MethodIcon>
                    <i className="fab fa-whatsapp"></i>
                  </MethodIcon>
                  <MethodText>
                    <h3>{t('contact.info.methods.whatsapp')}</h3>
                  </MethodText>
                </ContactMethod>
                
                <ContactMethod>
                  <MethodIcon>
                    <i className="fab fa-telegram"></i>
                  </MethodIcon>
                  <MethodText>
                    <h3>{t('contact.info.methods.telegram')}</h3>
                  </MethodText>
                </ContactMethod>
                
                <ContactMethod>
                  <MethodIcon>
                    <i className="fab fa-skype"></i>
                  </MethodIcon>
                  <MethodText>
                    <h3>{t('contact.info.methods.skype')}</h3>
                  </MethodText>
                </ContactMethod>
                
                <ContactMethod>
                  <MethodIcon>
                    <i className="fab fa-weixin"></i>
                  </MethodIcon>
                  <MethodText>
                    <h3>{t('contact.info.methods.wechat')}</h3>
                  </MethodText>
                </ContactMethod>
              </ContactMethods>
              
              <BusinessHours>
                <h3>{t('contact.info.businessHours.title')}</h3>
                <p>{t('contact.info.businessHours.weekdays')}</p>
                <p>{t('contact.info.businessHours.weekends')}</p>
                <p className="note">{t('contact.info.businessHours.note')}</p>
              </BusinessHours>
            </ContactInfo>
            
            <ContactForm>
              {isSubmitted ? (
                <SuccessMessage>
                  <h3>{t('contact.form.success')}</h3>
                  <p>{t('contact.form.successMessage')}</p>
                </SuccessMessage>
              ) : (
                <>
                  <FormTitle>{t('contact.form.title')}</FormTitle>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <Label htmlFor="message">{t('contact.form.message')}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <SubmitButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <i className="fas fa-spinner fa-spin"></i>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </SubmitButton>
                  </Form>
                </>
              )}
            </ContactForm>
          </ContactContent>
        </Container>
      </Section>
    </ContactContainer>
  );
};

export default Contact;