import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const BottomNavigationBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  max-width: 500px; /* max-width를 500px로 설정 */
  height: 60px;
  margin: 0 auto; /* 가운데 정렬을 위해 margin을 자동으로 설정 */
  border-top: 1px solid #e2e2e2; /* 테두리 스타일, 너비 및 색상 지정 */
`;

const BottomNavigation: React.FC = () => {
  const [activeNav, setActiveNav] = useState('molato');
  return (
    <BottomNavigationBar>
      <div>
        <Link to="/present" className="nav-link" onClick={() => setActiveNav('present')}>
          <img src={activeNav == 'present' ? 'src/assets/present-selected.svg' : 'src/assets/present.svg'}></img>
        </Link>
      </div>
      <div>
        <Link to="/" className="nav-link" onClick={() => setActiveNav('home')}>
          <img src='/src/assets/molato.svg'/>
        </Link>
      </div>
      <div>
        <img src='/src/assets/user.svg' color={activeNav == 'user' ? "#d25251" : "#333333"} />
      </div>
    </BottomNavigationBar>
  );
};

export default BottomNavigation;
