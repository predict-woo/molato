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
  background: var(--gray-light, #eee);
  height: 1px;
  align-self: stretch;
`;

const HistorySentItem = () => {
  const { id } = useParams<{ id: string }>();
  const [sent, setSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [giftDetail, setGiftDetail] = useState<GiftDetail>();
  const [itemDetail, setItemDetail] = useState<ItemDetail>();

  console.log(giftDetail);
  console.log(itemDetail);
  const axios = useAxios();

  const getItemDetail = async (itemId: string) => {
    await axios({
      url: `/item/${itemId}`,
      method: "get",
      onSuccess: (res) => {
        setItemDetail(res);
      },
    });
  };

  useEffect(() => {
    if (!id) return;
    axios({
      url: `/gift/${id}`,
      method: "get",
      onSuccess: (res) => {
        setGiftDetail(res);
        getItemDetail(res.itemId);
      },
    });
  }, [id]);

  return (
    <HistoryItemContent>
      <Title>
        <H>{giftDetail?.receiverName}</H>님에게
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
      {giftDetail?.repliedLetter && (
        <>
          <Divider />
          <Title>
            <H>{giftDetail?.receiverName}</H>님에게
            <br />
            <H>답장</H>을 받았어요
          </Title>

          <TextInput
            placeholder=""
            value={giftDetail.repliedLetter}
            onChange={() => {}}
            type="default"
            multiline
            disabled={true}
          />
        </>
      )}
    </HistoryItemContent>
  );
};

export default HistorySentItem;
