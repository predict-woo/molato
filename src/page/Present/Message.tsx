import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import ProductInfo from "component/ProductInfo";
import TextInput from "component/TextInput";
import { useState } from "react";

type Props = {
  nextStep: () => void;
};

const selectedProduct = {
  price: 500,
  image: "chuppacups",
  title: "추파춥스",
  description:
    "이 사탕을 받은 당사자는 오늘 더 달달한 하루를 보낼 수 있을거에요 :)",
};

const Message = ({ nextStep }: Props) => {
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <MainTextWrapper>
        <HighlightedMainText>몰라또</HighlightedMainText>
        <MainText>에게 줄 선물을 고르셨군요!</MainText>
        <br />
        <HighlightedMainText>마음을 담은 편지</HighlightedMainText>
        <MainText>를 함께 작성해주세요</MainText>
      </MainTextWrapper>

      <ProductInfo
        price={selectedProduct.price}
        image={selectedProduct.image}
        title={selectedProduct.title}
        description={selectedProduct.description}
      />
      <TextInput
        type="default"
        placeholder="마음을 담아 편지를 작성하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button text="선물 보내기" onClick={nextStep} disabled={message === ""} />
    </>
  );
};

export default Message;
