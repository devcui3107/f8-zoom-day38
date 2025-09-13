import styles from "./Notification.module.scss";
import iconBell from "/icons/bell.svg";

function Notification() {
  return (
    <div className={styles.wrapper}>
      <img src={iconBell} alt="notification" className={styles.wrapperIcon} />
    </div>
  );
}
export default Notification;
