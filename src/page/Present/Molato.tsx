import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import styled from "styled-components";
import UserCard from "component/UserCard";
import { useState } from "react";

type Props = {
  nextStep: () => void;
};

const UserCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const userList = [
  {
    profile: "/profile/default.svg",
    name: "익명의 몰라또",
    description: "저에게 선물을 주세또",
  },
  {
    profile: "/profile/default.svg",
    name: "대전의 용가리",
    description: "저에게 소소한 행복을 선물해주세요",
  },
  {
    profile: "/profile/default.svg",
    name: "제욱볶음",
    description: "어머나 너가 나한테 선물을 준지 몰라또",
  },
];

const Molato = ({ nextStep }: Props) => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  return (
    <>
      <MainTextWrapper>
        <HighlightedMainText>행복을 선물</HighlightedMainText>
        <MainText>해주고 싶은 </MainText>
        <br />
        <HighlightedMainText>몰라또</HighlightedMainText>
        <MainText>를 고르세요</MainText>
      </MainTextWrapper>

      <UserCardList>
        {userList.map((user, index) => (
          <UserCard
            key={index}
            profile={user.profile}
            name={user.name}
            description={user.description}
            selected={selectedUser === index}
            onClick={() => setSelectedUser(index)}
          />
        ))}
      </UserCardList>

      <Button
        text="선물 고르기"
        onClick={nextStep}
        disabled={selectedUser === null}
      />
    </>
  );
};

export default Molato;
