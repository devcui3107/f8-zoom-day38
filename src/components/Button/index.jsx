import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
  className,
  variants = "default",
  size = "medium",
  rounded,
  onClick,
  children,
}) {
  const classNames = clsx(
    styles.wrapper,
    className,
    rounded && styles.rounded,
    [styles[size]],
    [styles[variants]]
  );

  let Component = "button";
  return (
    <Component className={classNames} onClick={onClick}>
      {children}
    </Component>
  );
}
export default Button;
