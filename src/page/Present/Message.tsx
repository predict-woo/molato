import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import ProductInfo from "component/ProductInfo";
import TextInput from "component/TextInput";
import { Product, User } from "types";

type Props = {
  sendGift: () => void;
  selectedUser: User;
  selectedProduct: Product;
  message: string;
  setMessage: (message: string) => void;
};

const Message = ({
  sendGift,
  selectedUser,
  selectedProduct,
  message,
  setMessage,
}: Props) => {
  return (
    <>
      <MainTextWrapper>
        <HighlightedMainText>{selectedUser.name}</HighlightedMainText>
        <MainText>님에게 줄 선물을 고르셨군요!</MainText>
        <br />
        <HighlightedMainText>마음을 담은 편지</HighlightedMainText>
        <MainText>를 함께 작성해주세요</MainText>
      </MainTextWrapper>

      <ProductInfo product={selectedProduct} />
      <TextInput
        type="default"
        placeholder="마음을 담아 편지를 작성하세요"
        value={message}
        onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
        multiline
      />

      <Button text="선물 보내기" onClick={sendGift} disabled={message === ""} />
    </>
  );
};

export default Message;
