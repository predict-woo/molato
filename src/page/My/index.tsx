import { useState } from "react";
import Profile from "./atoms/Profile";
import styled from "styled-components";
import Button from "component/Button";

type User = {
  profile: string;
  name: string;
  description: string;
};

const currentUser: User = {
  profile: "/profile/default.svg",
  name: "익명의 몰라또",
  description: "저에게 선물을 주세또",
};

const MyInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const My = () => {
  const [profile, setProfile] = useState<User>(currentUser);
  const saveProfile = (profile: string, name: string, description: string) => {
    setProfile({ profile, name, description });
  };

  return (
    <MyInner>
      <Profile
        profile={profile.profile}
        name={profile.name}
        description={profile.description}
        saveProfile={saveProfile}
      />
      <Button text="로그아웃" onClick={() => console.log("로그아웃")} />
    </MyInner>
  );
};

export default My;
