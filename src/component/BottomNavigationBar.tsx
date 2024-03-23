import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import present from "../assets/present.svg";
import present_selected from "../assets/present-selected.svg";
import molato from "../assets/molato.svg";
import user from "../assets/user.svg";
import user_selected from "../assets/user-selected.svg";

const BottomNavigationBar = styled.div`
  position: sticky;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%; /* max-width를 500px로 설정 */
  height: 60px;
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 자동으로 설정 */
  padding: 0px 16px;
  border-top: 1px solid #e2e2e2; /* 테두리 스타일, 너비 및 색상 지정 */
  z-index: 1000; /* 화면 위에 표시되도록 높은 숫자로 설정 */
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BottomNavigation: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <BottomNavigationBar>
      <IconContainer>
        <Link to="/history" className="nav-link">
          <img src={pathname == "/history" ? present_selected : present}></img>
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to="/present" className="nav-link">
          <img src={molato} />
        </Link>
      </IconContainer>
      <IconContainer>
        <Link to="/my" className="nav-link">
          <img src={pathname == "/my" ? user_selected : user} />
        </Link>
      </IconContainer>
    </BottomNavigationBar>
  );
};

export default BottomNavigation;
