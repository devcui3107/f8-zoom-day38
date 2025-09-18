import { RowCols } from "@/components/GridSystem";
import styles from "./Test.module.scss";

function Test() {
  return (
    <div>
      <RowCols
        cols={{ base: 4, lg: 2, md: 1 }}
        className={styles.cusTomRowCols}
      >
        <div className={styles.box}>1</div>
        <div className={styles.box}>2</div>
        <div className={styles.box}>3</div>
        <div className={styles.box}>4</div>
      </RowCols>
    </div>
  );
}

export default Test;
