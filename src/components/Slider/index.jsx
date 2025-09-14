import { useCallback, useEffect, useState } from "react";
import styles from "./Slider.module.scss";

function Slider({ images = [], autoPlay = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const slideInterval = setInterval(nextSlide, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, images.length, nextSlide]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className={styles.slide} key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className={`${styles.btn} ${styles.prev}`} onClick={prevSlide}>
        ❮
      </button>
      <button className={`${styles.btn} ${styles.next}`} onClick={nextSlide}>
        ❯
      </button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
