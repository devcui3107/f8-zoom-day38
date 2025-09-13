import styles from "./DropdownStyles.module.scss";

function DropdownStyles({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
export default DropdownStyles;
