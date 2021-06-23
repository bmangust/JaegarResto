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
  wrap?: 'wrap' | 'nowrap';
  children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  width: 100%;
  height: 100%;
  display: flex;
  wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

const Flex = (props: FlexProps) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default Flex;
