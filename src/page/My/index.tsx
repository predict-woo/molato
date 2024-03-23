import { useEffect, useState } from "react";
import Profile from "./atoms/Profile";
import styled from "styled-components";
import Button from "component/Button";
import { User } from "types";
import useAxios from "hook/useAxios";
import { useNavigate } from "react-router-dom";
import useModal from "hook/useModal";

const MyInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const My = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { setAlert } = useModal();

  const axios = useAxios();
  const getUser = async () => {
    const res = await axios({
      url: "/user",
      method: "get",
    });
    setCurrentUser(res);
  };
  const setUser = async (user: User) => {
    await axios({
      url: "/user",
      method: "post",
      data: {
        profilePhoto: user!.profilePhoto,
        name: user!.name,
        introduction: user!.introduction,
      },
      onSuccess: (data) => {
        setCurrentUser(data);
      },
    });
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

  const navigate = useNavigate();
  const logout = async () => {
    await axios({
      url: "/auth/signout",
      method: "post",
      data: {},
      onSuccess: () => {
        setAlert(
          "로그아웃 성공",
          "로그아웃이 완료되었습니다",
          () => {
            navigate("/login");
          },
          () => {
            navigate("/login");
          }
        );
      },
    });
  };

  return (
    <MyInner>
      {currentUser && <Profile user={currentUser} saveProfile={saveProfile} />}
      <Button text="로그아웃" onClick={logout} />
    </MyInner>
  );
};

export default My;
