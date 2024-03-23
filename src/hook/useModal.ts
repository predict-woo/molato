import { modalState } from "atom/modal";
import { useRecoilState } from "recoil";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const openModal = () => setModal({ ...modal, open: true });
  const closeModal = () => setModal({ ...modal, open: false });

  const setAlert = (
    title: string,
    content: React.ReactNode,
    onConfirm?: () => void,
    onCancel?: () => void
  ) => {
    setModal({
      title,
      content,
      onConfirm: () => {
        onConfirm?.();
        closeModal();
      },
      onCancel: () => {
        onCancel?.();
        closeModal();
      },
      open: true,
    });
  };

  return { openModal, closeModal, setAlert };
};

export default useModal;
