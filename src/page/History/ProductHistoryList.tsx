import ProductHistory from "component/ProductHistory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HistoryItem } from ".";

type Props = {
  products: HistoryItem[];
  title: React.ReactNode;
  foldable?: boolean;
};

const ProductHistoryInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const ProductListInner = styled.div<{
  folded: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  transition: 0.5s;
  overflow: ${(props) => (props.folded ? "hidden" : "visible")};
  max-height: ${(props) => (props.folded ? "0" : "1000px")};
  opacity: ${(props) => (props.folded ? "0" : "1")};
  padding: 32px;
  margin: -32px;
`;

const ProductListHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  align-self: stretch;
  z-index: 2;
`;

const ProductHistoryList = ({ products, foldable, title }: Props) => {
  const [folded, setFolded] = useState<boolean>(false);
  const navigation = useNavigate();
  return (
    <ProductHistoryInner>
      <ProductListHeader>
        {title}
        {foldable && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => setFolded(!folded)}
            style={{
              transform: folded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          >
            <path
              d="M17.872 9.29244C17.7795 9.19974 17.6696 9.12619 17.5486 9.07601C17.4277 9.02583 17.298 9 17.167 9C17.036 9 16.9064 9.02583 16.7854 9.07601C16.6644 9.12619 16.5545 9.19974 16.462 9.29244L12.582 13.1724L8.70201 9.29244C8.60943 9.19986 8.49952 9.12642 8.37855 9.07632C8.25759 9.02621 8.12794 9.00042 7.99701 9.00042C7.86608 9.00042 7.73643 9.02621 7.61547 9.07632C7.4945 9.12642 7.38459 9.19986 7.29201 9.29244C7.19943 9.38503 7.12599 9.49494 7.07588 9.6159C7.02578 9.73686 6.99999 9.86651 6.99999 9.99744C6.99999 10.1284 7.02578 10.258 7.07588 10.379C7.12599 10.5 7.19943 10.6099 7.29201 10.7024L11.882 15.2924C11.9745 15.3851 12.0844 15.4587 12.2054 15.5089C12.3264 15.5591 12.456 15.5849 12.587 15.5849C12.718 15.5849 12.8477 15.5591 12.9686 15.5089C13.0896 15.4587 13.1995 15.3851 13.292 15.2924L17.882 10.7024C18.262 10.3224 18.262 9.68244 17.872 9.29244Z"
              fill="#333333"
            />
          </svg>
        )}
      </ProductListHeader>

      {products.length != 0 && (
        <ProductListInner folded={folded}>
          {products.map((product) => (
            <ProductHistory
              key={product.id}
              id={product.id}
              itemImage={product.itemImage}
              itemName={product.itemName}
              date={product.date}
              from={product.from}
              onClick={() => navigation(`/history/${product.id}`)}
            />
          ))}
        </ProductListInner>
      )}
    </ProductHistoryInner>
  );
};

export default ProductHistoryList;
