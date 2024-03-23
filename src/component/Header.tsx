import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const RouteContainer = styled.div`
  margin: 24px;
  flex-grow: 1;
  box-sizing: border-box;
`;

const Header = () => {
  const { pathname } = useLocation();
  const path2Type = (path: string) => {
    switch (path) {
      case "/":
        return "logo";
      case "/home":
        return "home";
      default:
        return "logo";
    }
  };

  return (
    <TotalContainer>
      <HeaderInner>
        {path2Type(pathname) === "logo" ? (
          <img src={logo} alt="logo" />
        ) : (
          <HeaderNav>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.71 6.70999C14.6175 6.61728 14.5076 6.54373 14.3866 6.49355C14.2657 6.44337 14.136 6.41754 14.005 6.41754C13.874 6.41754 13.7444 6.44337 13.6234 6.49355C13.5024 6.54373 13.3925 6.61728 13.3 6.70999L8.71 11.3C8.6173 11.3925 8.54375 11.5024 8.49357 11.6234C8.44339 11.7443 8.41756 11.874 8.41756 12.005C8.41756 12.136 8.44339 12.2656 8.49357 12.3866C8.54375 12.5076 8.6173 12.6175 8.71 12.71L13.3 17.3C13.3926 17.3926 13.5025 17.466 13.6235 17.5161C13.7444 17.5662 13.8741 17.592 14.005 17.592C14.1359 17.592 14.2656 17.5662 14.3865 17.5161C14.5075 17.466 14.6174 17.3926 14.71 17.3C14.8026 17.2074 14.876 17.0975 14.9261 16.9765C14.9762 16.8556 15.002 16.7259 15.002 16.595C15.002 16.4641 14.9762 16.3344 14.9261 16.2134C14.876 16.0925 14.8026 15.9826 14.71 15.89L10.83 12L14.71 8.11999C15.1 7.72999 15.09 7.08999 14.71 6.70999Z"
                fill="#333333"
              />
            </svg>
          </HeaderNav>
        )}
      </HeaderInner>
      <RouteContainer>
        <Outlet />
      </RouteContainer>
    </TotalContainer>
  );
};

export default Header;
