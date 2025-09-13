import { Link } from "react-router-dom";
import DropdownStyles from "../../../../components/DropdownStyles";

import styles from "./MyCourses.module.scss";

// Images
import imgCourse1 from "/images/my-course-1.png";
import imgCourse2 from "/images/course-js-pro.png";
import imgCourse3 from "/images/course-node-js.png";

const courseList = [
  {
    to: "#!",
    label: "FullStack Web",
    timeAgo: "3 ngày",
    thumbnail: imgCourse1,
    percent: 70,
  },
  {
    to: "#!",
    label: "Javascript Pro",
    timeAgo: "2 giờ",
    thumbnail: imgCourse2,
    percent: 95,
  },
  {
    to: "#!",
    label: "Node & ExpressJs",
    timeAgo: "7 giờ",
    thumbnail: imgCourse3,
    percent: 50,
  },
];

function MyCourseResult() {
  return (
    <div className={styles.result}>
      <DropdownStyles>
        <div className={styles.resultInner}>
          <div className={styles.resultRow}>
            <h3 className={styles.resultTitle}>Khoá học của tôi</h3>
            <Link to="#!" className={styles.resultViewMore}>
              Xem tất cả
            </Link>
          </div>
          <div>
            {courseList &&
              courseList.map((course) => (
                <div key={course.label} className={styles.resultItem}>
                  <Link to={course.to} className={styles.resultImgWrapper}>
                    <img
                      src={course.thumbnail}
                      alt=""
                      className={styles.resultImg}
                    />
                  </Link>
                  <div className={styles.resultInfo}>
                    <h4 className={styles.resultInfoTitle}>
                      <Link to={course.to}>{course.label}</Link>
                    </h4>
                    <p className={styles.resultInfoDesc}>
                      Học cách đây {course.timeAgo} trước
                    </p>
                    <div className={styles.progress}>
                      <div className={styles.progressBar}></div>
                      <div className={styles.progressTrack}></div>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${course.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </DropdownStyles>
    </div>
  );
}

export default MyCourseResult;
