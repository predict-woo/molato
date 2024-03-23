import Header from "component/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "page/Home";
import styled from "styled-components";
import Present from "page/Present";
import BottomNavigation from "component/BottomNavigationBar.tsx";
import History from "page/History";
import HistoryItem from "page/History/HistoryItem";

const AppInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
`;

const AppContent = styled.div`
  background-color: #fff;
  max-width: 500px;
  width: 100%;
`;

function App() {
  return (
    <AppInner>
      <AppContent>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/present" element={<Present />} />
            <Route path="/history/:id" element={<HistoryItem />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </AppContent>
      <BottomNavigation />
    </AppInner>
  );
}

export default App;
