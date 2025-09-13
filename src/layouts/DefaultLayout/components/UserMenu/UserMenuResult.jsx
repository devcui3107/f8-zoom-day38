import { Link } from "react-router-dom";
import DropdownStyles from "../../../../components/DropdownStyles";
import styles from "./UserMenu.module.scss";

// Image
import avatarImg from "/images/avatar.png";
import iconAvatarSp from "/icons/sp-avatar.svg";

const linkList = [
  {
    linkGroup: [{ url: "#!", label: "Trang cá nhân" }],
  },
  {
    linkGroup: [
      { url: "#!", label: "Viết blog" },
      { url: "#!", label: "Bài viết của tôi" },
      { url: "#!", label: "Bài viết đã lưu" },
    ],
  },
  {
    linkGroup: [
      { url: "#!", label: "Cài đặt" },
      { url: "#!", label: "Đăng xuất" },
    ],
  },
];

function UserMenuResult() {
  return (
    <div className={styles.result}>
      <DropdownStyles>
        <div className={styles.inner}>
          <div className={styles.resultRow}>
            <div className={styles.wrapperAvatarDropdown}>
              <div className={styles.avatar}>
                <img
                  src={avatarImg}
                  alt="avatar"
                  className={styles.avatarImg}
                />
                <img src={iconAvatarSp} alt="" className={styles.avatarSp} />
              </div>
            </div>
            <div className={styles.resultInfoUser}>
              <h3 className={styles.fullname}>Âu Đỗ Văn</h3>
              <span className={styles.username}>@dovanau</span>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linkList}>
            {linkList &&
              linkList.map((item) => (
                <div className={styles.linkItem}>
                  {item.linkGroup.map((itemChild) => (
                    <Link to="#!" className={styles.linkLink}>
                      {itemChild.label}
                    </Link>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </DropdownStyles>
    </div>
  );
}

export default UserMenuResult;
