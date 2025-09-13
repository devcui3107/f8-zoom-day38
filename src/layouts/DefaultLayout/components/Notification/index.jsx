import { useEffect, useState } from "react";

import NotificationResult from "./NotificationResult";

import styles from "./Notification.module.scss";
import iconBell from "/icons/bell.svg";

function Notification() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target.closest(`.${styles.wrapper}`)) {
        return;
      }
      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bell} onClick={() => setOpen((prev) => !prev)}>
        <img src={iconBell} alt="notification" className={styles.bellIcon} />
      </div>
      {open && <NotificationResult />}
    </div>
  );
}
export default Notification;
