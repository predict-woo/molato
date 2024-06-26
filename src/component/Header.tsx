import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import chevronLeft from "../assets/chevron-left.svg";

const HeaderInner = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: transparent;
`;

const HeaderNav = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { pathname } = useLocation();
  const path2Type = (path: string) => {
    if (path.startsWith("/history/sent")) return "history";
    if (path.startsWith("/history/received")) return "history";
    switch (path) {
      case "/":
        return "logo";
      case "/info":
        return "info";
      case "/history":
        return "logo";
      default:
        return "logo";
    }
  };
  const navigate = useNavigate();

  return (
    <HeaderInner>
      {path2Type(pathname) === "logo" ? (
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
      ) : path2Type(pathname) === "history" ? (
        <HeaderNav>
          <img
            src={chevronLeft}
            alt="back"
            onClick={() => navigate("/history")}
            style={{ cursor: "pointer" }}
          />
        </HeaderNav>
      ) : (
        <HeaderNav>
          <img
            src={chevronLeft}
            alt="back"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </HeaderNav>
      )}
    </HeaderInner>
  );
};

export default Header;
