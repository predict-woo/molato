import { modalState } from "atom/modal";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Button from "./Button";

const ModalOuter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: "0 24px";
  z-index: 1000;
`;

const ModalInner = styled.div`
  position: relative;
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
  z-index: 1001;
  border-radius: 16px;
  background: #fff;
  max-width: 300px;
`;

const ModalTitle = styled.div`
  color: var(--black, #333);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
`;

const ModalContent = styled.div`
  color: var(--black, #333);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 175% */
`;

const ModalCloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <ModalOuter>
      <ModalInner>
        <ModalTitle>{modal.title}</ModalTitle>
        <ModalContent>{modal.content}</ModalContent>
        <Button text="확인" onClick={modal.onConfirm} />
        <ModalCloseButton
          onClick={() => {
            modal.onCancel && modal.onCancel();
            setModal({ ...modal, open: false });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_970_3808"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_970_3808)">
              <path
                d="M12 13.8227L7.10005 19.2436C6.91672 19.4464 6.68338 19.5478 6.40005 19.5478C6.11672 19.5478 5.88338 19.4464 5.70005 19.2436C5.51672 19.0408 5.42505 18.7826 5.42505 18.4692C5.42505 18.1557 5.51672 17.8976 5.70005 17.6948L10.6 12.2739L5.70005 6.85305C5.51672 6.65023 5.42505 6.39209 5.42505 6.07864C5.42505 5.76519 5.51672 5.50705 5.70005 5.30423C5.88338 5.10141 6.11672 5 6.40005 5C6.68338 5 6.91672 5.10141 7.10005 5.30423L12 10.7251L16.9 5.30423C17.0834 5.10141 17.3167 5 17.6 5C17.8834 5 18.1167 5.10141 18.3 5.30423C18.4834 5.50705 18.575 5.76519 18.575 6.07864C18.575 6.39209 18.4834 6.65023 18.3 6.85305L13.4 12.2739L18.3 17.6948C18.4834 17.8976 18.575 18.1557 18.575 18.4692C18.575 18.7826 18.4834 19.0408 18.3 19.2436C18.1167 19.4464 17.8834 19.5478 17.6 19.5478C17.3167 19.5478 17.0834 19.4464 16.9 19.2436L12 13.8227Z"
                fill="#D25151"
              />
            </g>
          </svg>
        </ModalCloseButton>
      </ModalInner>
    </ModalOuter>
  );
};

export default Modal;
