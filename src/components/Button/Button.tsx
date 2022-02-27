import { AccentType, Theme } from '@/styles/theme';
import styled from 'styled-components';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'filled' | 'outline' | 'text';
  color?: 'primary' | 'secondary' | AccentType;
};

const getColor = (theme: Theme, color?: Props['color']) => {
  if (!color || color === 'primary') return theme.colors.primary;
  if (color === 'secondary') return theme.colors.secondary;
  return theme.colors.accent[color];
};

const Button = styled.button<Props>`
  padding: 20px;
  border: ${({ theme, color }) => '1px solid ' + getColor(theme, color)};
  border-radius: 8px;
  background: ${({ theme, variant, color }) => {
    if (variant === 'outline' || variant === 'text') return 'none';
    return getColor(theme, color);
  }};
  color: ${({ theme, variant, color }) => {
    if (!variant || variant === 'filled') return theme.colors.white;
    return getColor(theme, color);
  }};
  font-size: 1rem;
  cursor: pointer;

  &:active,
  &:hover {
    box-shadow: ${({ theme, color }) => '0 0 15px' + getColor(theme, color)};
  }

  &:disabled {
    background: none;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.base.darkLine};
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

export default Button;
