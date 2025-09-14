import { useCallback, useEffect, useState } from "react";

import ModalDefault from "./ModalDefault";

import styles from "./Modal.module.scss";
import iconCloseBtn from "/icons/close.svg";

function Modal({
  overlayClassName,
  classNameModal,
  classNameModalInner,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  closeTimeoutMS = 0,
  trigger,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = useCallback(() => {
    setIsVisible(false);
    // Delay để animation fadeOut hoàn thành trước khi unmount
    setTimeout(() => setIsOpen(false), closeTimeoutMS);
  }, [closeTimeoutMS]);

  // Xử lý logic khi nhấn ESC
  useEffect(() => {
    if (!isOpen || !shouldCloseOnEsc) return;

    const handleKeyEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyEsc);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyEsc);
    };
  }, [isOpen, closeModal, shouldCloseOnEsc]);

  const handleOverlay = () => {
    if (shouldCloseOnOverlayClick) {
      closeModal();
    }
  };

  const handleClose = () => {
    closeModal();
  };

  const handleConfirm = () => {
    console.log("Confirmed");
    closeModal();
  };

  return (
    <>
      {trigger && <div onClick={openModal}>{trigger}</div>}

      {isOpen && (
        <div
          className={`${
            classNameModal ? [styles[classNameModal]] : styles.modal
          } ${isVisible ? styles.visible : styles.hidden}`}
        >
          <div
            className={
              overlayClassName ? [styles[overlayClassName]] : styles.overlay
            }
            onClick={handleOverlay}
          />
          <div
            className={`${
              classNameModalInner
                ? [styles[classNameModalInner]]
                : styles.modalInner
            } ${isVisible ? styles.visible : styles.hidden}`}
          >
            <button className={styles.modalCloseBtn} onClick={handleClose}>
              <img src={iconCloseBtn} alt="" />
            </button>
            {children || (
              <ModalDefault onClose={handleClose} onConfirm={handleConfirm} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
