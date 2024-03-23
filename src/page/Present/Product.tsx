import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import styled from "styled-components";
import ProductCard from "component/ProductCard";
import { useState } from "react";

type Props = {
  nextStep: () => void;
};

const productList = [
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
  {
    price: 500,
    image: "chuppacups",
    text: "추파춥스",
  },
];

const ProductCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const Product = ({ nextStep }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <>
      <MainTextWrapper>
        <HighlightedMainText>몰라또</HighlightedMainText>
        <MainText>에게</MainText>
        <br />
        <HighlightedMainText>주고 싶은 선물</HighlightedMainText>
        <MainText>을 고르세요</MainText>
      </MainTextWrapper>

      <ProductCardList>
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            price={product.price}
            image={product.image}
            text={product.text}
            selected={selectedProduct === index}
            onClick={() => setSelectedProduct(index)}
          />
        ))}
      </ProductCardList>

      <Button
        text="편지 쓰기"
        onClick={nextStep}
        disabled={selectedProduct === null}
      />
    </>
  );
};

export default Product;
