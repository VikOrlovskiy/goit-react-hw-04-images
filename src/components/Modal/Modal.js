import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
const modalRoot = document.querySelector("#modal-root");
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onKeydovnCloseModal);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeydovnCloseModal);
  }
  onKeydovnCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  onBackdropClickCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div
        className={s.Modal__backdrop}
        onClick={this.onBackdropClickCloseModal}
      >
        <img
          className={s.Modal__content}
          src={this.props.src}
          alt="asfdsfdsf"
        />
      </div>,
      modalRoot
    );
  }
}
