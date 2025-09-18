import { Link } from "react-router-dom";
import { RowCols } from "@/components/GridSystem";
import styles from "./CardCourse.module.scss";

//Images
import imgCourseStart from "/images/course-start.png";
import imgCourseHtmlBase from "/images/course-html-base.png";
import imgCourseResponsive from "/images/course-responsive.png";
import imgCourseJsBase from "/images/course-js-base.png";
import imgCourseHtmlPro from "/images/course-html-css-pro.png";
import imgCourseSass from "/images/course-sass.png";
import imgCourseJsAdvance from "/images/course-js-advance.png";
import imgCourseUbuntu from "/images/course-ubuntu.png";
import imgCourseReact from "/images/course-react-base.png";
import imgCourseNode from "/images/course-node-js.png";

// Icons
import iconStudent from "/icons/student.svg";
import iconViews from "/icons/views.svg";
import iconTime from "/icons/clock.svg";
import clsx from "clsx";

const courseList = [
  {
    thumbnail: imgCourseStart,
    title: "Kiến thức nhập môn IT",
    price: "Miễn phí",
    students: 136.257,
    views: 9,
    time: "3h12p",
  },
  {
    thumbnail: imgCourseHtmlBase,
    title: "Responsive Với Grid System",
    price: "Miễn phí",
    students: 47.821,
    views: 34,
    time: "6h31p",
  },
  {
    thumbnail: imgCourseResponsive,
    title: "HTML CSS từ Zero đến Hero",
    price: "Miễn phí",
    students: 200.298,
    views: 117,
    time: "19h4p",
  },
  {
    thumbnail: imgCourseHtmlPro,
    title: "HTML CSS Pro",
    price: "Miễn phí",
    students: 107.308,
    views: 9,
    time: "3h12p",
  },
  {
    thumbnail: imgCourseSass,
    title: "Ngôn ngữ Sass",
    price: "Miễn phí",
    students: 17.211,
    views: 19,
    time: "6h18p",
  },
  {
    thumbnail: imgCourseJsBase,
    title: "Lập trình Javascript Cơ Bản",
    price: "Miễn phí",
    students: 214.361,
    views: 117,
    time: "29h5p",
  },
  {
    thumbnail: imgCourseJsAdvance,
    title: "Lập trình Javascript Nâng Cao",
    price: "Miễn phí",
    students: 41.121,
    views: 19,
    time: "8h32p",
  },
  {
    thumbnail: imgCourseUbuntu,
    title: "Làm việc với Terminal & Ubuntu",
    price: "Miễn phí",
    students: 21.204,
    views: 28,
    time: "4h59p",
  },
  {
    thumbnail: imgCourseReact,
    title: "Xây Dựng Website với ReactJs",
    price: "Miễn phí",
    students: 78.017,
    views: 112,
    time: "27h32p",
  },
  {
    thumbnail: imgCourseNode,
    title: "Node & ExpressJS",
    price: "Miễn phí",
    students: 48.941,
    views: 36,
    time: "12h8p",
  },
];

function CardCourse() {
  return (
    <>
      <h2 className={styles.courseTitle}>Khoá học miễn phí</h2>
      <RowCols cols={{ base: 4, xl: 3, md: 2 }} className={styles.passRowCols}>
        {courseList &&
          courseList.map((course) => (
            <div key={course.title} className={styles.wrapper}>
              <Link to={course.to} className={styles.cardImgWrap}>
                <img src={course.thumbnail} alt="" className={styles.cardImg} />
              </Link>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>
                  <Link to={course.to} className={styles.cardTitleLink}>
                    {course.title}
                  </Link>
                </h3>
                <div className={styles.cardPrice}>
                  <span className={styles.cardPriceText}>{course.price}</span>
                </div>
                <div className={styles.cardRow}>
                  <div className={styles.cardMoreInfo}>
                    <img
                      src={iconStudent}
                      alt=""
                      className={styles.cardMoreInfoIcon}
                    />
                    <span className={styles.cardMoreInfoText}>
                      {course.students}
                    </span>
                  </div>
                  <div
                    className={clsx(
                      styles.cardMoreInfoViews,
                      styles.cardMoreInfo
                    )}
                  >
                    <img
                      src={iconViews}
                      alt=""
                      className={styles.cardMoreInfoIcon}
                    />
                    <span className={styles.cardMoreInfoText}>
                      {course.views}
                    </span>
                  </div>
                  <div className={styles.cardMoreInfo}>
                    <img
                      src={iconTime}
                      alt=""
                      className={styles.cardMoreInfoIcon}
                    />
                    <span className={styles.cardMoreInfoText}>
                      {course.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </RowCols>
    </>
  );
}

export default CardCourse;
