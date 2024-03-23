import Header from "component/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "page/Home";
import styled from "styled-components";

const AppInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const AppContent = styled.div`
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  height: 100vh;
`;

function App() {
  return (
    <AppInner>
      <AppContent>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AppContent>
    </AppInner>
  );
}

export default App;
