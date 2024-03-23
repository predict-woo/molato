import useAxios from "hook/useAxios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Gift, Product } from "types";

type Props = {
  gift: Gift;
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
  border: 1px solid var(--gray-light, #ddd);
  box-sizing: border-box;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid var(--gray-light, #ddd);
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

const ProductHistory = ({ gift, onClick }: Props) => {
  function extractKoreanDate(dateTimeString: string) {
    // Date 객체 생성 (UTC 시간으로부터)
    const date = new Date(dateTimeString);

    // 한국 시간대로 변경
    date.setHours(date.getHours() + 9); // UTC 시간대에서 한국 시간대로 변환 (9시간 추가)

    // 날짜 형식 변환 (년-월-일)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // 한국 시간대로 변환된 날짜 정보 반환
    return `${year}-${month}-${day}`;
  }

  if (!gift) return null;
  return (
    <ProductInfoInner onClick={onClick}>
      <ProductImage src={gift.itemImage}></ProductImage>
      <ProductTextOuter>
        <div style={{ display: "flex" }}>
          <ProductTitle>{gift.itemName}</ProductTitle>
          <ProductDate>{extractKoreanDate(gift.date)}</ProductDate>
        </div>
        <ProductFrom>
          {gift.senderName !== undefined ? gift.senderName : gift.fromName}
        </ProductFrom>
      </ProductTextOuter>
    </ProductInfoInner>
  );
};

export default ProductHistory;
