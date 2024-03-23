import { H } from "component/H";

import styled from "styled-components";
import ProductHistoryList from "./ProductHistoryList";
import useAxios from "hook/useAxios";
import { useEffect, useState } from "react";

const HistoryContent = styled.div`
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

export type HistoryItem = {
  id: string;
  itemId: string;
  itemImage: string;
  itemName: string;
  date: string;
  from: string;
};

const History = () => {
  const axios = useAxios();
  const [newGift, setNewGift] = useState<HistoryItem[]>();

  const getNewGift = async () => {
    await axios({
      url: "/user/newGift",
      method: "get",
      onSuccess: (data) => {
        setNewGift(data);
      },
    });
  };

  console.log(newGift);

  useEffect(() => {
    getNewGift();
  }, []);

  return (
    <HistoryContent>
      <Title>
        <H>몰라또</H>와
        <br />
        <H>총 32회의 선물</H>을 주고 받은 기록이에요
      </Title>
      <UncheckedProducts>
        <ProductHistoryList
          title={
            <ProductListHeader>
              <H>아직 확인하지 않은 선물</H>이 {newGift?.length}개 있어요
            </ProductListHeader>
          }
          products={newGift || []}
          foldable={false}
        />
      </UncheckedProducts>
      <UncheckedProducts>
        <ProductHistoryList
          title={
            <ProductListHeader>
              <H>아직 확인하지 않은 답장</H>이 1개 있어요
            </ProductListHeader>
          }
          products={[
            {
              price: 1000,
              image: "beatles",
              item: "포도",
              date: "2024.03.23",
              from: "용가리",
            },
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
          {
            price: 1000,
            image: "beatles",
            item: "포도",
            date: "2024.03.23",
            from: "용가리",
          },
          {
            price: 1000,
            image: "grape_jelly",
            item: "사과",
            date: "2024.03.23",
            from: "용가리",
          },
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
          {
            price: 1000,
            image: "beatles",
            item: "포도",
            date: "2024.03.23",
            from: "용가리",
          },
          {
            price: 1000,
            image: "grape_jelly",
            item: "사과",
            date: "2024.03.23",
            from: "용가리",
          },
        ]}
        foldable={true}
      />
    </HistoryContent>
  );
};

export default History;
