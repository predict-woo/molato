import styled from "styled-components";
import TextBubble from "./TextBubble";
import { H } from "component/H";
import { useEffect, useState } from "react";

const HomeInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Home = () => {
  const [step, setStep] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
      setIntervalDuration((prevDuration) =>
        prevDuration === 1000 ? 500 : 1000
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  useEffect(() => {
    if (step >= 16) {
      return;
    }
    window.scrollTo(0, document.body.scrollHeight);
  }, [step]);

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

      {step >= 8 && (
        <TextBubble waiting={step >= 8 && step <= 9} direction="right">
          맞아또!
          <br />
          <H>받는 걸 넘어서</H> 그 기쁨을 다시
          <br />
          <H>다른 사람들과 나눌</H> 수도 있겠또?
        </TextBubble>
      )}

      {step >= 10 && (
        <TextBubble waiting={step >= 10 && step <= 11} direction="left">
          완전 기대되또!
          <br />
          <H>서로를 위해,</H>
          <br />
          <H>우리가 만들어 나가는 선물 문화</H>
          <br />
          짱이구만또
        </TextBubble>
      )}

      {step >= 12 && (
        <TextBubble waiting={step >= 12 && step <= 13} direction="right">
          아주 좋아또!
          <br />
          <H>두근두근 설렘 넘치는 세상</H>을
          <br />
          만들어 나가는 마니또
          <br />
          <H>다 같이 시작</H>해볼까또?
        </TextBubble>
      )}
    </HomeInner>
  );
};

export default Home;
