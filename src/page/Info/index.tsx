import styled from "styled-components";
import TextBubble from "./TextBubble";

const HighlightedContent = styled.span`
  color: var(--primary, #d25151);
`;

const HomeInner = styled.div`
  flex-grow: 1;
  height: calc(100vh - 120px - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Home = () => {
  return (
    <HomeInner>
      <TextBubble>
        안녕하세또! 당신의 마니또
        <HighlightedContent> 몰라또에또~</HighlightedContent>
        <br />
        <HighlightedContent>대전에 사는 용가리</HighlightedContent>가 선물을
        보내왔어또!
        <br />
        뭔지 다 같이 함께 열어볼까또?
      </TextBubble>
    </HomeInner>
  );
};

export default Home;