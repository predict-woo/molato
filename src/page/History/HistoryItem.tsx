import { H } from "component/H";
import ProductInfo from "component/ProductInfo";
import TextInput from "component/TextInput";
import { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

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

const HistoryItem = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<string>("");
  console.log(id);

  return (
    <HistoryItemContent>
      <Title>
        <H>대전에 사는 용가리</H>님이
        <br />
        <H>마음을 담은 선물</H>을 보냈어요
      </Title>
      <ProductInfo
        price={1000}
        image="grape_jelly"
        title="사과"
        description="용가리"
      />
      <TextInput
        placeholder="메시지를 입력해주세요"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        type="default"
        multiline
      />
    </HistoryItemContent>
  );
};

export default HistoryItem;
