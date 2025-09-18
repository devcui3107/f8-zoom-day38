import { Link } from "react-router-dom";
import DropdownStyles from "@/components/DropdownStyles";
import styles from "./Notification.module.scss";

// Image
import logoIcon from "/images/logo-f8.png";

const resultList = [
  {
    nameLesson: "JSON Server là gì?",
    timeAgo: "1 ngày",
  },
  {
    nameLesson: "Tìm hiểu về Closure",
    timeAgo: "2 ngày",
  },
  {
    nameLesson: "Cài đặt và khởi tạo JSON Server",
    timeAgo: "4 ngày",
  },
  {
    nameLesson: "Kế thừa với Function Constructor",
    timeAgo: "15 ngày",
  },
  {
    nameLesson: "Private fields với Class",
    timeAgo: "15 ngày",
  },
];

function NotificationResult() {
  return (
    <div className={styles.result}>
      <DropdownStyles>
        <div className={styles.inner}>
          <div className={styles.resultRow}>
            <h3 className={styles.resultTitle}>Thông báo</h3>
            <span className={styles.resultCheckRead}>Đánh dấu đã đọc</span>
          </div>

          <div className={styles.resultList}>
            {resultList &&
              resultList.map((item) => (
                <Link
                  key={item.nameLesson}
                  to="#!"
                  className={styles.resultItem}
                >
                  <img src={logoIcon} alt="" className={styles.resultIcon} />
                  <div className={styles.resultDetail}>
                    <p className={styles.resultContent}>
                      Bài học{" "}
                      <span className={styles.resultStrong}>
                        {item.nameLesson}
                      </span>{" "}
                      mới được thêm vào
                    </p>
                    <span className={styles.resultAgo}>
                      {item.timeAgo} trước
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </DropdownStyles>
    </div>
  );
}

export default NotificationResult;
