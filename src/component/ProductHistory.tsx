import styled from "styled-components";
import { getImageUrl } from "utils";

type Props = {
  price: number;
  image: string;
  item: string;
  from: string;
};

const ProductInfoInner = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--gray-light, #eee);
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid var(--gray-light, #eee);
  border-radius: 16px;
`;

const ProductTextOuter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
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

const ProductFrom = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ProductHistory = ({ price, image, item, from }: Props) => {
  return (
    <ProductInfoInner>
      <ProductImage src={getImageUrl(price, image)}></ProductImage>
      <ProductTextOuter>
        <ProductTitle>{item}</ProductTitle>
        <ProductFrom>{from}</ProductFrom>
      </ProductTextOuter>
    </ProductInfoInner>
  );
};

export default ProductHistory;
