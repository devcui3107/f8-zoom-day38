import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ className, size = "medium", children }) {
  const classNames = clsx(styles.wrapper, className, [styles[size]]);

  let Component = "button";
  return <Component className={classNames}>{children}</Component>;
}
export default Button;
