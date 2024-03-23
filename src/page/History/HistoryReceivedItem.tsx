import Button from "component/Button";
import { H } from "component/H";
import ProductInfo from "component/ProductInfo";
import TextInput from "component/TextInput";
import useAxios from "hook/useAxios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { GiftDetail, ItemDetail } from "types";

const HistoryItemContent = styled.div`
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

const Divider = styled.div`
  border-radius: 10px;
  background: var(--gray-light, #ddd);
  height: 1px;
  align-self: stretch;
`;

const HistoryReceivedItem = () => {
  const { id } = useParams<{ id: string }>();
  const [sent, setSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [giftDetail, setGiftDetail] = useState<GiftDetail>();
  const [itemDetail, setItemDetail] = useState<ItemDetail>();

  const axios = useAxios();

  useEffect(() => {
    if (!id) return;
    axios({
      url: `/gift/${id}`,
      method: "get",
      onSuccess: (res) => {
        if (res?.repliedLetter) {
          setMessage(res.repliedLetter);
          setSent(true);
        }

        setGiftDetail(res);
        getItemDetail(res.itemId);
      },
    });
  }, [id]);

  const getItemDetail = async (itemId: string) => {
    await axios({
      url: `/item/${itemId}`,
      method: "get",
      onSuccess: (res) => {
        setItemDetail(res);
      },
    });
  };

  const sendMessage = async () => {
    await axios({
      url: `/gift/reply`,
      method: "post",
      data: {
        giftId: id,
        repliedLetter: message,
      },
      onSuccess: () => {
        setSent(true);
        alert("답장을 보냈습니다");
      },
    });
  };

  return (
    <HistoryItemContent>
      <Title>
        <H>{giftDetail?.senderName}</H>님이
        <br />
        <H>마음을 담은 선물</H>을 보냈어요
      </Title>
      {itemDetail && <ProductInfo product={itemDetail} />}
      <TextInput
        placeholder=""
        value={giftDetail?.letter || ""}
        type="default"
        multiline
        disabled
      />
      <Divider />
      <Title>
        <H>{giftDetail?.senderName}</H>님에게
        <br />
        <H>답장</H>을 {sent ? "보냈어요" : "보내보세요"}
      </Title>

      <TextInput
        placeholder="마음을 담아 답장을 작성하세요"
        value={message}
        onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
        type="default"
        multiline
        disabled={sent}
      />
      {!sent && (
        <Button
          onClick={() => sendMessage()}
          text="답장 보내기"
          disabled={message === ""}
        />
      )}
    </HistoryItemContent>
  );
};

export default HistoryReceivedItem;
