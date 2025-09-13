import clsx from "clsx";
import styles from "./GridSystem.module.scss";

/* Row */
export function Row({ children, className }) {
  return <div className={clsx(styles.row, className)}>{children}</div>;
}

/* Col */
export function Col({ children, span = 12, sm, md, lg, xl, xxl, className }) {
  const colClass = clsx(
    styles.col,
    span && styles[`col-${span}`],
    sm && styles[`col-sm-${sm}`],
    md && styles[`col-md-${md}`],
    lg && styles[`col-lg-${lg}`],
    xl && styles[`col-xl-${xl}`],
    xxl && styles[`col-xxl-${xxl}`],
    className
  );

  return <div className={colClass}>{children}</div>;
}
