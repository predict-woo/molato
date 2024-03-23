import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const TextBubbleOuter = styled.div`
  display: flex;
  padding-bottom: 19px;
  justify-content: center;
  align-items: center;
`;

const TextBubbleInner = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--gray-light, #eee);
  background: #fff;
`;

const TextBubble = ({ children }: Props) => {
  return (
    <TextBubbleOuter>
      <TextBubbleInner>{children}</TextBubbleInner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="21"
        viewBox="0 0 30 21"
        fill="none"
      >
        <path
          d="M16.8342 1.00732H1.33423C1.33423 6.00732 4.33423 11.5073 8.83423 14.5073C20.7321 22.4393 31.8342 20.0073 27.8342 18.0073C23.8342 16.0073 20.2934 13.7726 18.3342 10.5073C16.8342 8.00732 16.5009 3.34066 16.8342 1.00732Z"
          fill="white"
          stroke="#EEEEEE"
        />
      </svg>
    </TextBubbleOuter>
  );
};

export default TextBubble;
