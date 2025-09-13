import Button from "../../../../components/Button";
import styles from "./MyCourses.module.scss";

function MyCourses() {
  return (
    <div className={styles.wrapper}>
      <Button className={styles.coursesBtn}>Khoá học của tôi</Button>
    </div>
  );
}
export default MyCourses;
