import React, { FC, useEffect } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { TModalFunction } from "../../services/types/types";

const ModalFunction: FC<TModalFunction> = ({ children, onClose, title }) => {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        <h2 className="text text_type_main-large mt-10 ml-10">{title}</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("modals") as HTMLDivElement
  );
};

export const Modal = React.memo(ModalFunction);
