import React, { FC } from "react";
import { TModalOverlay } from "../../services/types/types";
import styles from "./modal-overlay.module.css";

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
  const closeModalOverlay = (event: any) => {
    if (event.target.classList.contains(styles.overlay)) {
      onClose();
    }
  };

  return <div className={styles.overlay} onClick={closeModalOverlay}></div>;
};
