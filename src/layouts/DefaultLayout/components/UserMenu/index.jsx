import styles from "./UserMenu.module.scss";
import avatarImg from "/images/avatar.png";
import iconAvatarSp from "/icons/sp-avatar.svg";

function UserMenu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={avatarImg} alt="avatar" className={styles.avatarImg} />
        <img src={iconAvatarSp} alt="" className={styles.avatarSp} />
      </div>
    </div>
  );
}

export default UserMenu;
