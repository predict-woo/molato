import Button from "component/Button";
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

const Divider = styled.div`
  border-radius: 10px;
  background: var(--gray-light, #eee);
  height: 1px;
  align-self: stretch;
`;

const HistoryItem = () => {
  const { id } = useParams<{ id: string }>();
  const [sent, setSent] = useState<boolean>(false);
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
        placeholder=""
        value="오늘 하루 함내세요!"
        type="default"
        multiline
        disabled
      />
      <Divider />
      <Title>
        <H>대전에 사는 용가리</H>님에게
        <br />
        <H>답장</H>을 보내보세요
      </Title>

      <TextInput
        placeholder=""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="default"
        multiline
        disabled={sent}
      />
      {!sent && <Button onClick={() => setSent(true)} text="답장 보내기" />}
    </HistoryItemContent>
  );
};

export default HistoryItem;
