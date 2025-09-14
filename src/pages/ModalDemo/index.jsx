import Modal from "../../components/Modal";
import Button from "../../components/Button";
import styles from "./ModalDemo.module.scss";

function ModalDemo() {
  return (
    <>
      <h2 className={styles.title}>Exercise Modal</h2>
      <div>
        <h3 className={styles.titleLv2}>Tuỳ biến các cách đóng modal</h3>
        <div className={styles.modalList}>
          <Modal
            closeTimeoutMS={300}
            trigger={
              <Button rounded variants="outline">
                Modal Base
              </Button>
            }
          >
            {/* Sử dụng Nội dung mặc định của Modal */}
          </Modal>

          <Modal
            closeTimeoutMS={300}
            shouldCloseOnOverlayClick={false}
            trigger={
              <Button rounded variants="outline">
                Overlay Click Won’t Close Modal
              </Button>
            }
          >
            {/* Sử dụng Nội dung mặc định của Modal */}
          </Modal>

          <Modal
            closeTimeoutMS={300}
            shouldCloseOnEsc={false}
            trigger={
              <Button rounded variants="outline">
                ESC Press Won’t Close Modal
              </Button>
            }
          >
            {/* Sử dụng Nội dung mặc định của Modal */}
          </Modal>
        </div>

        <h3 className={styles.titleLv2}>Tuỳ biến các Styles Modal</h3>
        <div className={styles.modalList}>
          <Modal
            trigger={
              <Button rounded variants="outline">
                Modal Content Custom
              </Button>
            }
          >
            <h1>Header Modal: Tự CSS & Tuỳ chỉnh</h1>
            <h1>Nội dung Modal: Tự CSS & Tuỳ chỉnh</h1>
            <h1>Footer Modal: Tự thêm xử lý các nút Button</h1>
          </Modal>
          <Modal
            overlayClassName="custom-overlay"
            trigger={
              <Button rounded variants="outline">
                Modal Custom Class Overlay
              </Button>
            }
          >
            <p>Sử dụng Class Custom CSS Overlay gốc thông qua class:</p>
            <p>overlayClassName="custom-overlay"</p>
          </Modal>

          <Modal
            classNameModal="custom-modal"
            classNameModalInner="custom-modal-inner"
            trigger={
              <Button rounded variants="outline">
                Modal Custom Class Modal
              </Button>
            }
          >
            <p>Sử dụng Class Custom CSS Modal gốc thông qua 2 class:</p>
            <p>classNameModal="custom-modal"</p>
            <p>classNameModalInner="custom-modal-inner"</p>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default ModalDemo;
