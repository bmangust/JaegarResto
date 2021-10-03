import { Dish } from '@/store/features/menu/menuSlice';
import styled from 'styled-components';
import Icon from '@/components/Icon/Icon';
import Input from '@/components/Input/Input';

interface Props {
  item: Dish;
  quantity: number;
}
const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  & .item-header {
    display: flex;
    align-items: center;
  }

  & .item-header .img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  & .item-header .titleWrapper {
    /* 50px image + 10px margin + 60px input + 10px margin */
    width: calc(100% - 60px - 70px);
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & .item-header .titleWrapper .title {
    font-size: 0.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 10px;
  }
  & .item-header .titleWrapper .price {
    color: ${({ theme }) => theme.colors.text.gray};
    font-size: 0.7rem;
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
  }

  & .item-footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  & .comments {
    width: 100%;
  }

  & .col1 {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .item-footer .button {
    background-color: inherit;
    border: ${({ theme }) => '1px solid ' + theme.colors.primary};
    outline: none;
    border-radius: 10px;
    width: 60px;
    margin-left: 10px;
    transform: scale(1);
    transition: 0.3s;
  }
  & .item-footer .button:hover {
    transform: scale(1.1);
  }
`;

const CartItem = ({ item, quantity }: Props) => {
  if (!item) return <span>nothing</span>;
  const handleClick = () => {};
  return (
    <StyledDiv>
      <div className="item-header">
        <div className="col1">
          <img className="img" src={item.image} alt={`${item.title} image`} />
          <div className="titleWrapper">
            <span className="title">{item.title}</span>
            <span className="price">$ {item.price}</span>
          </div>
          <Input
            className="quantity"
            align="center"
            width="47px"
            value={quantity}
            onChange={() => {}}
          />
        </div>
        <span className="total">$ {item.price * quantity}</span>
      </div>
      <div className="item-footer">
        <div className="col1">
          <Input
            className="comments"
            width="250px"
            value={''}
            onChange={() => {}}
            placeholder="Order note..."
          />
        </div>
        <div className="total">
          <button className="button">
            <Icon
              onClick={handleClick}
              icon="delete"
              color="white"
              active={false}
            />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default CartItem;
