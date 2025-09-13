import GoToTop from "../../components/GoToTop";

import styles from "./ScrollDemo.module.scss";

function ScrollDemo() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Bài tập Scroll To Top</h1>
      <p className={styles.intro}>
        Trang này có rất nhiều nội dung để bạn cuộn xuống thử nghiệm tính năng
        scroll lên đầu.
      </p>

      <div className={styles.content}>
        {Array.from({ length: 40 }).map((_, index) => (
          <p key={index}>
            Đây là đoạn văn bản số {index + 1}. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Natus itaque deserunt quibusdam, quod
            doloribus aspernatur cumque fugiat iure reiciendis atque! Quaerat
            debitis possimus at hic nihil. Soluta, adipisci. Culpa distinctio
            enim ipsam est laboriosam dolorum. Repellat cupiditate possimus iste
            incidunt aspernatur provident animi, blanditiis adipisci maiores
            rerum sed debitis hic.
          </p>
        ))}
      </div>

      {/* GoToTop */}
      <GoToTop />
    </div>
  );
}

export default ScrollDemo;
