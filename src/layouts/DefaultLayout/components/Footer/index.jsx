import { RowCols } from "@/components/GridSystem";
import { Link } from "react-router-dom";
import AppLogo from "../AppLogo";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <RowCols cols={{ base: 4, lg: 2, md: 1 }} className={styles.passRowCols}>
        {/* Cột 1: Liên hệ */}
        <div className={styles.footerCol}>
          <AppLogo white />
          <ul className={styles.contactList}>
            <li>
              <strong>Điện thoại:</strong> 08 1919 8989
            </li>
            <li>
              <strong>Email:</strong> contact@fullstack.edu.vn
            </li>
            <li>
              <strong>Địa chỉ:</strong> Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy,
              Hà Nội
            </li>
          </ul>
        </div>

        {/* Cột 2: Về F8 */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>VỀ F8</h3>
          <ul className={styles.footerList}>
            <li>
              <Link to="#!">Giới thiệu</Link>
            </li>
            <li>
              <Link to="#!">Liên hệ</Link>
            </li>
            <li>
              <Link to="#!">Điều khoản</Link>
            </li>
            <li>
              <Link to="#!">Bảo mật</Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Sản phẩm */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>SẢN PHẨM</h3>
          <ul className={styles.footerList}>
            <li>
              <Link to="#!">Game Nester</Link>
            </li>
            <li>
              <Link to="#!">Trò chơi CSS Diner</Link>
            </li>
            <li>
              <Link to="#!">Bộ chọn CSS trò chơi</Link>
            </li>
            <li>
              <Link to="#!">Trò chơi Froggy</Link>
            </li>
            <li>
              <Link to="#!">Trò chơi Froggy Pro</Link>
            </li>
            <li>
              <Link to="#!">Tin tức trò chơi</Link>
            </li>
          </ul>
        </div>

        {/* Cột 4: Công cụ */}
        <div className={styles.footerCol}>
          <h3 className={styles.footerTitle}>CÔNG CỤ</h3>
          <ul className={styles.footerList}>
            <li>
              <Link to="#!">Tạo CV xin việc</Link>
            </li>
            <li>
              <Link to="#!">Rút gọn liên kết</Link>
            </li>
            <li>
              <Link to="#!">Trình tạo đường dẫn clip</Link>
            </li>
            <li>
              <Link to="#!">Trình tạo đoạn trích</Link>
            </li>
            <li>
              <Link to="#!">Trình tạo lưới CSS</Link>
            </li>
            <li>
              <Link to="#!">Cảnh báo sờ tay lên mặt</Link>
            </li>
          </ul>
        </div>
      </RowCols>

      <p className={styles.footerCopyright}>
        © 2018 - 2025 F8. Nền tảng học lập trình hàng đầu Việt Nam
      </p>
    </footer>
  );
}

export default Footer;
