import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  height: 70px;
  /* padding-bottom: 5px; */
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.darkLine};
  display: flex;
  align-items: center;

  & span {
    display: flex;
    align-items: center;
  }

  & .itemCol {
    /* 50px image + 10px margin + 60px input + 10px margin */
    width: calc(100% - 60px - 70px);
    height: 50px;
  }

  & .quantity {
    width: 60px;
    margin-left: 10px;
    padding: 10px 5px;
  }

  & .total {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    white-space: nowrap;
  }

  & .col1 {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
function CartListHeader() {
  return (
    <StyledDiv>
      <div className="col1">
        <span className="itemCol">Item</span>
        <span className="quantity">Qty</span>
      </div>
      <span className="total">Price</span>
    </StyledDiv>
  );
}

export default CartListHeader;
