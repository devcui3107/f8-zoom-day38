import MyCourseResult from "./MyCoursesResult";
import Button from "../../../../components/Button";

import styles from "./MyCourses.module.scss";
import { useEffect, useState } from "react";

function MyCourses() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target.closest(`.${styles.wrapper}`)) {
        return;
      }
      setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.coursesBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Khoá học của tôi
      </Button>
      {open && <MyCourseResult />}
    </div>
  );
}
export default MyCourses;
