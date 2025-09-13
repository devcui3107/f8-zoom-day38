import styles from "./DropdownStyles.module.scss";

function DropdownStyles({ children }) {
  return <div className={styles.dropdown}>{children}</div>;
}
export default DropdownStyles;
