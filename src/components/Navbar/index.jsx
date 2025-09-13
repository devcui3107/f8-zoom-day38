import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

// Icon
import iconHome from "/icons/home.svg";
import iconProfile from "/icons/profile.svg";
import iconModal from "/icons/info.svg";
import iconScroll from "/icons/scroll.svg";

const navbarList = [
  {
    to: "/",
    label: "Home",
    icon: iconHome,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: iconProfile,
  },
  {
    to: "/modal-demo",
    label: "Modal Demo",
    icon: iconModal,
  },
  {
    to: "/scroll-demo",
    label: "Scroll Demo",
    icon: iconScroll,
  },
];

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navbarList &&
          navbarList.map((nav) => (
            <li key={nav.label} className={styles.navbarItem}>
              <NavLink
                to={nav.to}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <img
                  src={nav.icon}
                  alt={nav.label}
                  className={styles.navIcon}
                />

                <span>{nav.label}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
export default Navbar;
