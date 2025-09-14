import Button from "../Button";
import styles from "./Modal.module.scss";

function ModalDefault({ onClose, onConfirm }) {
  return (
    <>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Tiêu đề Modal</h2>
      </div>

      <div className={styles.modalBody}>
        <p>Nội dung content của Modal</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quibusdam quos cum similique voluptatem maxime fugit quam assumenda
          consequatur? Ducimus, aliquid quas? Voluptates expedita laborum
          deserunt magnam cum tempore laboriosam.
        </p>
      </div>

      <div className={styles.modalFooter}>
        <Button size="small" variants="outline" onClick={onClose}>
          Hủy
        </Button>
        <Button size="small" variants="primary" onClick={onConfirm}>
          Xác nhận
        </Button>
      </div>
    </>
  );
}

export default ModalDefault;
