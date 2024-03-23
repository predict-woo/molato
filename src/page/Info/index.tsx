import styled from "styled-components";
import TextBubble from "./TextBubble";
import { H } from "component/H";
import { useEffect, useState } from "react";

const HomeInner = styled.div`
  width: 100%;
  /* height: calc(100vh - 120px - 48px); */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Home = () => {
  const [step, setStep] = useState(0);
  // increase step by 1 every 1 seconds then 3 seconds, so 1, 3, 1, 3, 1, 3, ...
  const [intervalDuration, setIntervalDuration] = useState(3000); // Start with 1 second

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase step by 1
      setStep((prevStep) => prevStep + 1);
      // Alternate interval duration between 1 second and 3 seconds
      setIntervalDuration((prevDuration) =>
        prevDuration === 3000 ? 1000 : 3000
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);
  return (
    <HomeInner>
      {step >= 0 && (
        <TextBubble waiting={step >= 0 && step <= 1} direction="right">
          안녕하세또! 당신의 마니또
          <H> 몰라또에또~</H>
          <br />
          <H>대전에 사는 용가리</H>가 선물을 보내왔어또!
          <br />
          뭔지 다 같이 함께 열어볼까또?
        </TextBubble>
      )}
      {step >= 2 && (
        <TextBubble waiting={step >= 2 && step <= 3} direction="left">
          <H>몰라또</H>? 이름이 왜 이래?
        </TextBubble>
      )}

      {step >= 4 && (
        <TextBubble waiting={step >= 4 && step <= 5} direction="right">
          몰라또가 어때서 그러시나또!
          <br />
          몰라또는 <H>몰라와 마니또의 합성어</H>로
          <br />
          <H>서로를 선물로 이어주는 앱</H>이에또~
          <br />
        </TextBubble>
      )}

      {step >= 6 && (
        <TextBubble waiting={step >= 6 && step <= 7} direction="left">
          그럼 <H>예상치 못하는 순간</H>에
          <br />
          <H>사랑스러운 선물</H>을 받겠구나!{" "}
        </TextBubble>
      )}
    </HomeInner>
  );
};

export default Home;
