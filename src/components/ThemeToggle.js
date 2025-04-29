import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: ${props => props.theme === 'light' ? '#1d1d1f' : '#f5f5f7'};

  &:hover {
    background-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton 
      onClick={toggleTheme} 
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      theme={theme}
    >
      <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
    </ToggleButton>
  );
};

export default ThemeToggle;