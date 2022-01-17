import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  top: 7%;
  right: 5%;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.lighter};
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.base.darkerBG};
  transform: rotateZ(-10deg);
`;

interface Props {
  discount?: number;
}

const Discount = ({ discount }: Props) => {
  if (!discount) return null;
  return <Span className="discount">-{discount}%</Span>;
};

export default Discount;
