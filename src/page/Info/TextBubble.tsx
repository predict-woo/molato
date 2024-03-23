import React from "react";
import styled from "styled-components";
import logoSmall from "assets/logo-small.png";
import LottieWait from "component/LottieWait";

type Props = {
  children: React.ReactNode;
  direction: "left" | "right";
  waiting?: boolean;
};

const TextBubbleOuter = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ direction }) =>
    direction === "left" ? "flex-start" : "flex-end"};
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

const TextBubbleBottom = styled.div<{ direction: string }>`
  position: absolute;
  bottom: -26px;
  ${({ direction }) => (direction === "left" ? "left: 60px;" : "right: 60px;")}
`;

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
`;

const TextBubbleLayout = styled.div<{ direction: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ direction }) =>
    direction === "left" ? "flex-start" : "flex-end"};
`;

const TextBubble = ({ children, direction, waiting = false }: Props) => {
  return (
    <TextBubbleLayout direction={direction}>
      <TextBubbleOuter direction={direction}>
        <TextBubbleInner>
          {waiting ? (
            <LottieWait loop />
          ) : (
            <>
              {children}
              <TextBubbleBottom direction={direction}>
                {direction === "right" ? (
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
                ) : (
                  <svg
                    width="32"
                    height="23"
                    viewBox="0 0 32 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1658 2.00732H29.6658C29.6658 7.00732 26.6658 12.5073 22.1658 15.5073C10.2679 23.4393 -0.834229 21.0073 3.16577 19.0073C7.16577 17.0073 10.7066 14.7726 12.6658 11.5073C14.1658 9.00732 14.4991 4.34066 14.1658 2.00732Z"
                      fill="white"
                      stroke="#dddddd"
                    />
                    <rect
                      width="19"
                      height="2"
                      transform="matrix(-1 0 0 1 31 1)"
                      fill="white"
                    />
                  </svg>
                )}
              </TextBubbleBottom>
            </>
          )}
        </TextBubbleInner>

        <StyledImage src={logoSmall} alt="logo" />
      </TextBubbleOuter>
    </TextBubbleLayout>
  );
};

export default TextBubble;
