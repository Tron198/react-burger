import React, { useEffect } from 'react';
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../modal-overlay/modal-overlay';

function ModalFunction({ children, onClose, title }) {

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

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
    document.getElementById('modals')
  )
}

ModalFunction.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

export const Modal = React.memo(ModalFunction);