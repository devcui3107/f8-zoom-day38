import { useEffect, useState } from "react";
import UserMenuResult from "./UserMenuResult";

import styles from "./UserMenu.module.scss";
import avatarImg from "/images/avatar.png";
import iconAvatarSp from "/icons/sp-avatar.svg";
import { useLocation } from "react-router-dom";

function UserMenu() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  // Xử lý việc chọn page ở mobile tự động tắt dropdown
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
      <div className={styles.wrapperAvatar}>
        <div className={styles.avatar} onClick={() => setOpen((prev) => !prev)}>
          <img src={avatarImg} alt="avatar" className={styles.avatarImg} />
          <img src={iconAvatarSp} alt="" className={styles.avatarSp} />
        </div>
      </div>
      {open && <UserMenuResult />}
    </div>
  );
}

export default UserMenu;
