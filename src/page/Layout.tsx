import BottomNavigation from "component/BottomNavigationBar";
import Header from "component/Header";
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
