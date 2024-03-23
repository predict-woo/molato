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
  const [newReply, setNewReply] = useState<HistoryItem[]>();
  const [recieved, setRecieved] = useState<HistoryItem[]>();
  const [sended, setSended] = useState<HistoryItem[]>();

  const getNewGift = async () => {
    await axios({
      url: "/user/newGift",
      method: "get",
      onSuccess: (data) => {
        setNewGift(data);
      },
    });
  };

  const getNewReply = async () => {
    await axios({
      url: "/user/newReply",
      method: "get",
      onSuccess: (data) => {
        setNewReply(data);
      },
    });
  };

  const getReceived = async () => {
    await axios({
      url: "gift/received",
      method: "get",
      onSuccess: (data) => {
        setRecieved(data);
      },
    });
  };

  const getSend = async () => {
    await axios({
      url: "gift/sended",
      method: "get",
      onSuccess: (data) => {
        setSended(data);
      },
    });
  };

  console.log("newGift", newGift);
  console.log("newReply", newReply);
  console.log("recieved", recieved);
  console.log("send", sended);

  useEffect(() => {
    getNewGift();
    getNewReply();
    getReceived();
    getSend();
  }, []);

  return (
    <HistoryContent>
      <Title>
        <H>몰라또</H>와
        <br />
        <H>
          총 {recieved && sended && recieved.length + sended.length}회의 선물
        </H>
        을 주고 받은 기록이에요
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
          type="received"
        />
      </UncheckedProducts>
      <UncheckedProducts>
        <ProductHistoryList
          title={
            <ProductListHeader>
              <H>아직 확인하지 않은 답장</H>이 {newReply?.length}개 있어요
            </ProductListHeader>
          }
          products={newReply || []}
          foldable={false}
          type="sent"
        />
      </UncheckedProducts>
      <ProductHistoryList
        title={
          <ProductListHeader>
            <H>받은 선물</H> 목록 ({recieved?.length}개)
          </ProductListHeader>
        }
        products={recieved || []}
        foldable={true}
        type="received"
      />
      <ProductHistoryList
        title={
          <ProductListHeader>
            <H>준 선물</H> 목록 ({sended?.length}개)
          </ProductListHeader>
        }
        products={sended || []}
        foldable={true}
        type="sent"
      />
    </HistoryContent>
  );
};

export default History;
