import React from "react";
import { atom } from "recoil";

type ModalState = {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

export const modalState = atom<ModalState>({
  key: "modal",
  default: {
    open: false,
    title: "",
    content: "",
    onConfirm: () => {},
    onCancel: () => {},
  },
});
