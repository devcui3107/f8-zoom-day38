import clsx from "clsx";
import styles from "./GridSystem.module.scss";

export function RowCols({ children, cols = {}, className }) {
  // #1. Chuyển object thành mảng chứa các mảng cặp key:value
  const entries = Object.entries(cols);

  // #2. Duyệt qua mảng để lấy ra các key:value
  const colClasses = entries.map(([breakpoint, value]) => {
    // Tạo tên class có breakpoint
    const classWithBreakpoint = styles[`row-cols-${breakpoint}-${value}`];

    // Tạo tên class không có breakpoint
    const classWithoutBreakpoint = styles[`row-cols-${value}`];

    // Nếu có breakpoint (md, lg, xl...) thì lấy theo nó
    // Nếu là base thì dùng classWithoutBreakpoint
    return classWithBreakpoint || classWithoutBreakpoint;
  });

  return (
    <div className={clsx(styles.row, colClasses, className)}>{children}</div>
  );
}
