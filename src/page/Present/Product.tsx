import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import styled from "styled-components";
import ProductCard from "component/ProductCard";
import { useEffect, useState } from "react";
import useAxios from "hook/useAxios";
import { Product, User } from "types";

type Props = {
  nextStep: () => void;
  selectedUser: User;
  selectedProduct: Product | null;
  select: (product: Product) => void;
};

const ProductCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const Product = ({
  nextStep,
  selectedUser,
  selectedProduct,
  select,
}: Props) => {
  const axios = useAxios();
  const [productList, setProductList] = useState<Product[]>([]);

  const getProductList = async () => {
    const res = await axios({
      url: "/item",
      method: "get",
    });
    setProductList(res);
    console.log(res);
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <MainTextWrapper>
        <HighlightedMainText>{selectedUser.name}</HighlightedMainText>
        <MainText>에게</MainText>
        <br />
        <HighlightedMainText>주고 싶은 선물</HighlightedMainText>
        <MainText>을 고르세요</MainText>
      </MainTextWrapper>

      <ProductCardList>
        {productList &&
          productList.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              selected={
                selectedProduct ? selectedProduct.id === product.id : false
              }
              onClick={() => select(product)}
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
