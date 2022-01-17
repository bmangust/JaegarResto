import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 0.9rem;
  margin-bottom: 0.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .crossed {
    text-decoration: line-through;
  }
  .newPrice {
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

interface Props {
  discount?: number;
  price: number;
}

const Price = ({ discount, price }: Props) => {
  if (!discount)
    return (
      <Div>
        <span className="normal">$ {price}</span>
      </Div>
    );
  const newPrice = ((price * (100 - discount)) / 100).toFixed(2);
  return (
    <Div>
      <span className="crossed">$ {price}</span>
      <span className="newPrice">$ {newPrice}</span>
    </Div>
  );
};

export default Price;
