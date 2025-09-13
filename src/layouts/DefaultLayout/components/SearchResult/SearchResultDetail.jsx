import { Link } from "react-router-dom";
import styles from "./SearchResult.module.scss";

// Images
import courseJsBase from "/images/course-js-base.png";
import courseJsAdvance from "/images/course-js-advance.png";
import courseJsPro from "/images/course-js-pro.png";
import post1 from "/images/result-1.jpg";
import post2 from "/images/result-2.png";
import post3 from "/images/result-3.jpg";
import post4 from "/images/result-4.jpg";
import post5 from "/images/result-5.jpg";
import post6 from "/images/result-6.jpg";

const resultList = [
  {
    label: "Khoá học",
    linkMore: "#!",
    infoItem: [
      {
        imgCourse: courseJsBase,
        nameCourse: "Lập trình Javascript cơ bản",
      },
      {
        imgCourse: courseJsAdvance,
        nameCourse: "Lập trình Javascript Nâng Cao",
      },
      {
        imgCourse: courseJsPro,
        nameCourse: "Javascript Pro",
      },
    ],
  },
  {
    label: "Bài viết",
    linkMore: "#!",
    infoItem: [
      {
        imgCourse: post1,
        nameCourse: "Không Nên Học Javascript, Liệu Có Đúng Như Vậy?",
      },
      {
        imgCourse: post2,
        nameCourse: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1",
      },
      {
        imgCourse: post3,
        nameCourse:
          "Chuyện cũ xưa: Nên dùng === hay == để so sánh trong Javascript?",
      },
    ],
  },
  {
    label: "Video",
    linkMore: "#!",
    infoItem: [
      {
        imgCourse: post4,
        nameCourse: 'Giải thích các trường hợp "phi lý" trong JavaScript?',
      },
      {
        imgCourse: post5,
        nameCourse: 'Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
      },
      {
        imgCourse: post6,
        nameCourse: "Fn.apply() method trong Javascript?",
      },
    ],
  },
];

function SearchResultDetail() {
  return (
    <>
      {resultList &&
        resultList.map((item) => (
          <div key={item.label} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{item.label}</h3>
              <Link to={item.linkMore} className={styles.cardViewMore}>
                Xem thêm
              </Link>
            </div>
            <ul className={styles.cardBody}>
              {item.infoItem.map((itemChild) => (
                <li key={itemChild.nameCourse} className={styles.cardBodyItem}>
                  <img
                    src={itemChild.imgCourse}
                    alt=""
                    className={styles.cardBodyIcon}
                  />
                  <Link to="#!">{itemChild.nameCourse}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}

export default SearchResultDetail;
