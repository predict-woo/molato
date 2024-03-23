import styled from "styled-components";
import { getImageUrl } from "utils";

type Props = {
  price: number;
  image: string;
  item: string;
  date: string;
  from: string;
  onClick?: () => void;
};

const ProductInfoInner = styled.div`
  width: 100%;
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
  box-sizing: border-box;
  cursor: pointer;
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
  flex: 1;
  align-self: stretch;
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const ProductDate = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ProductFrom = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const ProductHistory = ({ price, image, item, date, from, onClick }: Props) => {
  return (
    <ProductInfoInner onClick={onClick}>
      <ProductImage src={getImageUrl(price, image)}></ProductImage>
      <ProductTextOuter>
        <div style={{ display: "flex" }}>
          <ProductTitle>{item}</ProductTitle>
          <ProductDate>{date}</ProductDate>
        </div>
        <ProductFrom>{from}</ProductFrom>
      </ProductTextOuter>
    </ProductInfoInner>
  );
};

export default ProductHistory;
