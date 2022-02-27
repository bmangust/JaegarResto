import styled from 'styled-components';
import Payment from '@/components/Payment/Payment';
import Confirmation from '@/components/Confirm/Confirmation';

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  width: 100vw;
  max-height: 100vh;
  background-color: #000000aa;
  display: flex;
  justify-content: flex-end;
`;

const Order = () => {
  return (
    <StyledDiv>
      <Confirmation />
      <Payment />
    </StyledDiv>
  );
};

export default Order;
