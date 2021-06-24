import React from 'react';
import styled from 'styled-components';

interface FlexProps {
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch';
  flexWrap?: 'wrap' | 'nowrap';
  children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  background-color: inherit;
`;

const Flex: React.FC<FlexProps> = (props) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default StyledFlex;
