import { Link } from "react-router-dom";
import styles from "./AppLogo.module.scss";
import clsx from "clsx";

function AppLogo({ white }) {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          src="/images/logo-f8.png"
          alt="F8 Zoom Day 37"
          className={styles.logoImage}
        />
        <h1 className={clsx(styles.logoText, white && styles.white)}>
          Học lập trình để đi làm
        </h1>
      </Link>
    </div>
  );
}
export default AppLogo;
