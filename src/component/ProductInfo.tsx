import styled from "styled-components";
import { Product } from "types";

type Props = {
  product: Product;
};

const ProductInfoInner = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 16px;
  background: var(--white, #fff);
  border: 1px solid var(--gray-light, #ddd);
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid var(--gray-light, #ddd);
  border-radius: 16px;
`;

const ProductTextOuter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 8px;
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

const ProductDescription = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ProductInfo = ({ product }: Props) => (
  <ProductInfoInner>
    <ProductImage src={product.photo}></ProductImage>
    <ProductTextOuter>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
    </ProductTextOuter>
  </ProductInfoInner>
);

export default ProductInfo;
