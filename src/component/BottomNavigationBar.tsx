import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import present from "../assets/present.svg";
import present_selected from "../assets/present-selected.svg";
import molato from "../assets/molato.svg";
import user from "../assets/user.svg";
import user_selected from "../assets/user-selected.svg";
import useAxios from "../hook/useAxios";

const BottomNavigationBar = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  height: 60px;
  margin: 0 auto;
  padding: 0px 16px;
  border-top: 1px solid #e2e2e2;
  z-index: 1000;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 18px;
  height: 18px;
  background-color: #d25151;
  border-radius: 50%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const BottomNavigation: React.FC = () => {
  const axiosReq = useAxios();

  const [notiCnt, setNotiCnt] = useState(0);

  const fetchAlarmCnt = async () => {
    try {
      const response = await axiosReq({
        url: "https://api.molato.fun/user/newCnt",
        method: "get",
        params: {
          Cookie: document.cookie,
        },
      });
      setNotiCnt(response["total"]);
    } catch (error) {
      setNotiCnt(0); // 에러 발생 시 알람 개수를 0으로 설정
    }
  };

  useEffect(() => {
    fetchAlarmCnt(); // 최초 실행
    const intervalId = setInterval(fetchAlarmCnt, 10000); // 10초마다 실행되도록 설정
    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 interval 해제
  }, []);

  const { pathname } = useLocation();

  return (
    <BottomNavigationBar>
      <IconContainer>
        <Link to="/history" className="nav-link">
          <img
            src={pathname === "/history" ? present_selected : present}
            alt="History"
          />
        </Link>
        {notiCnt > 0 && <NotificationIcon>{notiCnt}</NotificationIcon>}
      </IconContainer>
      <IconContainer>
        <Link to="/" className="nav-link">
          <img src={molato} alt="Present" />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to="/my" className="nav-link">
          <img src={pathname === "/my" ? user_selected : user} alt="User" />
        </Link>
      </IconContainer>
    </BottomNavigationBar>
  );
};

export default BottomNavigation;
