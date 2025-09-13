import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({ className, size = "medium", onClick, children }) {
  const classNames = clsx(styles.wrapper, className, [styles[size]]);

  let Component = "button";
  return (
    <Component className={classNames} onClick={onClick}>
      {children}
    </Component>
  );
}
export default Button;
