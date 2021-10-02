import { Dish } from '@/store/features/menu/menuSlice';
import { AccentType, Theme } from '@/styles/theme';
import styled from 'styled-components';
import Icon, { DeleteIcon } from '@/components/Icon/Icon';
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
    width: calc(60% - 50px);
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

  & .total {
    width: 20%;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & .item-footer {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  & .item-footer .comments {
    width: 80%;
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
        <img className="img" src={item.image} alt={`${item.title} image`} />
        <div className="titleWrapper">
          <span className="title">{item.title}</span>
          <span className="price">$ {item.price}</span>
        </div>
        <Input
          className="quantity"
          width="30px"
          value={quantity}
          onChange={() => {}}
        />
        <span className="total">$ {item.price * quantity}</span>
      </div>
      <div className="item-footer">
        <Input
          className="comments"
          width="180px"
          value={''}
          onChange={() => {}}
          placeholder="Order note..."
        />
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
