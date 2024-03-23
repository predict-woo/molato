import { H } from "component/H";

import styled from "styled-components";
import ProductHistoryList from "./ProductHistoryList";

const PresentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  height: 100%;
`;

const Title = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

const ProductListHeader = styled.div`
  color: var(--black, #333);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const UncheckedProducts = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid var(--primary, #d25151);
`;

const History = () => {
  return (
    <PresentContent>
      <Title>
        <H>몰라또</H>와
        <br />
        <H>총 32회의 선물</H>을 주고 받은 기록이에요
      </Title>
      <UncheckedProducts>
        <ProductHistoryList
          title={
            <ProductListHeader>
              <H>아직 확인하지 않은 선물</H>이 2개 있어요
            </ProductListHeader>
          }
          products={[
            { price: 1000, image: "beatles", item: "포도", from: "용가리" },
            { price: 1000, image: "grape_jelly", item: "사과", from: "용가리" },
          ]}
          foldable={false}
        />
      </UncheckedProducts>
      <ProductHistoryList
        title={
          <ProductListHeader>
            <H>받은 선물</H> 목록 (16개)
          </ProductListHeader>
        }
        products={[
          { price: 1000, image: "beatles", item: "포도", from: "용가리" },
          { price: 1000, image: "grape_jelly", item: "사과", from: "용가리" },
        ]}
        foldable={true}
      />
      <ProductHistoryList
        title={
          <ProductListHeader>
            <H>준 선물</H> 목록 (14개)
          </ProductListHeader>
        }
        products={[
          { price: 1000, image: "beatles", item: "포도", from: "용가리" },
          { price: 1000, image: "grape_jelly", item: "사과", from: "용가리" },
        ]}
        foldable={true}
      />
    </PresentContent>
  );
};

export default History;
