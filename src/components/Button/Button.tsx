import { AccentType, Theme } from '@/styles/theme';
import styled from 'styled-components';

const MainButton = styled.button`
  padding: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${({
    theme,
    color,
  }: {
    theme: Theme;
    color?: AccentType;
  }) => (color ? theme.colors.accent[color] : theme.colors.primary)};
  box-shadow: ${({ theme }) => '0 8px 24px ' + theme.colors.base.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  cursor: pointer;
`;

export default MainButton;
