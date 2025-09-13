import { useEffect, useState } from "react";

import styles from "./Profile.module.scss";

import avatarImg from "/images/avatar.png";
import iconAvatarSp from "/icons/sp-avatar.svg";

function Profile() {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    // Cleanup
    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // Function Support
  const handleChangeAvatar = (e) => {
    const image = e.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    setPreviewUrl(previewUrl);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.profileCard}>
        {/* Avatar */}
        <div className={styles.wrapperAvatar}>
          <div className={styles.avatar}>
            <img
              src={previewUrl || avatarImg}
              alt="avatar"
              className={styles.avatarImg}
            />
            <img src={iconAvatarSp} alt="" className={styles.avatarSp} />
          </div>
          <label className={styles.changeBtn} htmlFor="avatarUpload">
            Đổi avatar
          </label>
          <input
            id="avatarUpload"
            type="file"
            hidden
            onChange={(e) => handleChangeAvatar(e)}
          />
        </div>

        <button className={styles.saveBtn}>Lưu thay đổi</button>
      </div>
    </div>
  );
}

export default Profile;
