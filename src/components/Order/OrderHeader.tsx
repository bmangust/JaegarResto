import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 130px;
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.darkLine};

  .button {
    width: calc(24px + 5px * 2);
    height: calc(24px + 5px * 2);
    background: none;
    color: ${({ theme }) => theme.colors.white};
    padding: 5px;
    border: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .title {
    font-size: max(1.5rem, 24pt);
    margin: 0;
  }

  .subtitle {
    font-size: max(1rem, 16pt);
    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;

interface Props {
  icon?: JSX.Element;
  title: string;
  subtitle?: string;
}

const OrderHeader = ({ title, subtitle, icon }: Props) => {
  return (
    <StyledDiv>
      {icon && <button className="button">{icon}</button>}
      <h2 className="title">{title}</h2>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
    </StyledDiv>
  );
};

export default OrderHeader;
