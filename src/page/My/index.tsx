import { useEffect, useState } from "react";
import Profile from "./atoms/Profile";
import styled from "styled-components";
import Button from "component/Button";
import { User } from "types";
import useAxios from "hook/useAxios";

const MyInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const My = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const axios = useAxios();
  const getUser = async () => {
    const res = await axios({
      url: "/user",
      method: "get",
    });
    setCurrentUser(res);
    console.log(res);
  };
  const setUser = async (user: User) => {
    const res = await axios({
      url: "/user",
      method: "post",
      data: {
        profilePhoto: user!.profilePhoto,
        name: user!.name,
        introduction: user!.introduction,
      },
      onSuccess: (data) => {
        console.log("data", data);
        setCurrentUser(data);
      },
    });
    console.log(res);
  };

  useEffect(() => {
    getUser();
  }, []);

  const saveProfile = (
    profilePhoto: string,
    name: string,
    introduction: string
  ) => {
    if (!currentUser) return;
    const newUser = { ...currentUser, profilePhoto, name, introduction };
    setCurrentUser(newUser);
    setUser(newUser);
  };

  return (
    <MyInner>
      {currentUser && <Profile user={currentUser} saveProfile={saveProfile} />}
      <Button text="로그아웃" onClick={() => console.log("로그아웃")} />
    </MyInner>
  );
};

export default My;
