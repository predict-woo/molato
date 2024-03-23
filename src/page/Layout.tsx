import BottomNavigation from "component/BottomNavigationBar";
import Header from "component/Header";
import useAxios from "hook/useAxios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const RouteContainer = styled.div`
  padding: 24px;
  flex-grow: 1;
  box-sizing: border-box;
`;

const Layout = () => {
  const axios = useAxios();

  useEffect(() => {
    const interval = setInterval(async () => {
      await axios({
        url: "/auth/refresh",
        method: "post",
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <TotalContainer>
        <Header />
        <RouteContainer>
          <Outlet />
        </RouteContainer>
        <BottomNavigation />
      </TotalContainer>
    </div>
  );
};

export default Layout;
