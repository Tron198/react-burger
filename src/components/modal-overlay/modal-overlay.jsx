import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export function ModalOverlay({ onClose }) {

  const closeModalOverlay = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={closeModalOverlay}>
    </div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}