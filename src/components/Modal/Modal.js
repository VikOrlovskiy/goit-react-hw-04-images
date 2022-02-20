import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
const modalRoot = document.querySelector("#modal-root");
export default function Modal({ onClose, src }) {
  useEffect(() => {
    window.addEventListener("keydown", onKeydovnCloseModal);
    return () => window.removeEventListener("keydown", onKeydovnCloseModal);
  });

  const onKeydovnCloseModal = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };
  const onBackdropClickCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div className={s.Modal__backdrop} onClick={onBackdropClickCloseModal}>
      <img className={s.Modal__content} src={src} alt="asfdsfdsf" />
    </div>,
    modalRoot
  );
}
// https://github.com/VikOrlovskiy/goit-react-hw-04-feedback
// https://vikorlovskiy.github.io/goit-react-hw-04-feedback/
// https://vikorlovskiy.github.io/goit-react-hw-04-phonebook/
// https://github.com/VikOrlovskiy/goit-react-hw-04-phonebook
// https://github.com/VikOrlovskiy/goit-react-hw-04-images
// https://vikorlovskiy.github.io/goit-react-hw-04-images/