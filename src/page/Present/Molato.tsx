import Button from "component/Button";
import {
  HighlightedMainText,
  MainText,
  MainTextWrapper,
} from "./atoms/MainText";
import styled from "styled-components";
import UserCard from "component/UserCard";
import { useEffect, useState } from "react";
import useAxios from "hook/useAxios";
import { User } from "types";
import { H } from "component/H";
import { useNavigate } from "react-router-dom";

type Props = {
  nextStep: () => void;
  selectedUser: User | null;
  select: (user: User) => void;
};

const UserCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoText = styled(H)`
  width: 100%;
  color: var(--primary-light, #ed9999) !important;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

const Molato = ({ nextStep, selectedUser, select }: Props) => {
  const navigate = useNavigate();

  const axios = useAxios();
  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = async () => {
    const res = await axios({
      url: "/user/list",
      method: "get",
    });
    setUserList(res);
  };

  useEffect(() => {
    getUserList();
  }, []);

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
        {userList &&
          userList.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              selected={selectedUser ? selectedUser.id === user.id : false}
              onClick={() => select(user)}
            />
          ))}
      </UserCardList>

      <Button
        text="선물 고르기"
        onClick={nextStep}
        disabled={selectedUser === null}
      />
      <InfoText onClick={() => navigate("/info")}>몰라또가 뭐에또?</InfoText>
    </>
  );
};

export default Molato;
