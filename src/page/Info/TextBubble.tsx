import React from "react";
import styled from "styled-components";
import logoSmall from "assets/logo-small.png";

type Props = {
  children: React.ReactNode;
};

const TextBubbleOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: "fit-content";
  gap: 19px;
`;

const TextBubbleInner = styled.div`
  position: relative;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--gray-light, #ddd);
  background: #fff;
  color: var(--black, #333);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const TextBubbleBottom = styled.div`
  position: absolute;
  bottom: -26px;
  right: 60px;
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
`;

const TextBubble = ({ children }: Props) => {
  return (
    <TextBubbleOuter>
      <TextBubbleInner>
        {children}{" "}
        <TextBubbleBottom>
          <svg
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8342 2.00732H2.33423C2.33423 7.00732 5.33423 12.5073 9.83423 15.5073C21.7321 23.4393 32.8342 21.0073 28.8342 19.0073C24.8342 17.0073 21.2934 14.7726 19.3342 11.5073C17.8342 9.00732 17.5009 4.34066 17.8342 2.00732Z"
              fill="white"
              stroke="#dddddd"
            />
            <rect x="1" y="1" width="19" height="2" fill="white" />
          </svg>
        </TextBubbleBottom>
      </TextBubbleInner>
      <StyledImage src={logoSmall} alt="logo" />
    </TextBubbleOuter>
  );
};

export default TextBubble;
