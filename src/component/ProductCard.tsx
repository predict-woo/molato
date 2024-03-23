import styled from "styled-components";
import { Product } from "types";

type Props = {
  product: Product;
  selected?: boolean;
  onClick?: () => void;
};

const ProductCardInner = styled.div<{ selected: boolean }>`
  flex: 1;
  position: relative;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${(props) =>
    props.selected
      ? "1px solid var(--primary, #D25151)"
      : "1px solid var(--white, #fff)"};
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--gray-light, #eee);
  border-radius: 16px;
`;

const ProductTextOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ProductTitle = styled.div`
  flex: 1;
  width: 100%;
  align-self: stretch;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProductCard = ({ product, selected, onClick }: Props) => {
  return (
    <ProductCardInner selected={!!selected} onClick={onClick}>
      <ProductImage src={product.photo} />
      <ProductTextOuter>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>{product.price}원</ProductPrice>
      </ProductTextOuter>
    </ProductCardInner>
  );
};

export default ProductCard;
