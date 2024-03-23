import React from "react";
import styled from "styled-components";

type Props = {
  price: number;
  image: string;
  text: string;
  selected?: boolean;
};

const ProductCardInner = styled.div<{ selected: boolean }>`
  display: flex;
  width: 104px;
  height: 152px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: ${(props) =>
    props.selected ? "1px solid var(--primary, #D25151);" : "none"};
`;

const ProductImage = styled.img`
  flex: 1 0 0;
  align-self: stretch;
`;

const ProductTextOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const ProductTitle = styled.div`
  align-self: stretch;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ProductPrice = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ProductCard = ({ price, image, text, selected }: Props) => {
  const priceRange = (price: number) => {
    if (price <= 500) {
      return "500";
    } else if (price <= 1000) {
      return "1000";
    } else if (price <= 2000) {
      return "2000";
    } else {
      return "error";
    }
  };
  return (
    <ProductCardInner selected={!!selected}>
      <ProductImage src={`/${priceRange(price)}/${image}.png`}></ProductImage>
      <ProductTextOuter>
        <ProductTitle>{text}</ProductTitle>
        <ProductPrice>{price}원</ProductPrice>
      </ProductTextOuter>
    </ProductCardInner>
  );
};

export default ProductCard;