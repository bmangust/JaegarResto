import React from 'react';
import styled from 'styled-components';

interface Props {
  mainText: string;
  secondaryText: string;
}

const StyledTitle = styled.div`
  height: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  & .main {
    font-weight: 600;
    font-size: 1.5rem;
  }
  & .secondary {
    font-weight: 300;
    font-size: 0.9rem;
  }
`;

const Title = (props: Props) => {
  return (
    <StyledTitle>
      <p className="main">{props.mainText}</p>
      <p className="secondary">{props.secondaryText}</p>
    </StyledTitle>
  );
};

export default Title;
