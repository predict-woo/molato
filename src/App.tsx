import "./App.css";
import { Routes, Route } from "react-router-dom";
import Info from "page/Info";
import styled from "styled-components";
import Present from "page/Present";
import History from "page/History";
import HistorySentItem from "page/History/HistorySentItem";
import HistoryReceivedItem from "page/History/HistoryReceivedItem";

import Login from "page/Login";
import My from "page/My";
import Layout from "page/Layout";
import Signin from "page/Signin";
import Modal from "component/Modal";
import { useRecoilValue } from "recoil";
import { modalState } from "atom/modal";

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
  const { open } = useRecoilValue(modalState);
  console.log(open);
  return (
    <AppInner>
      <AppContent>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Present />} />
            <Route path="/info" element={<Info />} />
            <Route path="/history/sent/:id" element={<HistorySentItem />} />
            <Route
              path="/history/received/:id"
              element={<HistoryReceivedItem />}
            />
            <Route path="/history" element={<History />} />
            <Route path="/my" element={<My />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </AppContent>
      {open && <Modal />}
    </AppInner>
  );
}

export default App;
