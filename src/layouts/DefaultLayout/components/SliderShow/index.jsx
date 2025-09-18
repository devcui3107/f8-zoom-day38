import Slider from "@/components/Slider";

import styles from "./SliderShow.module.scss";

// Images
import imgSlider1 from "/images/slider-1.png";
import imgSlider2 from "/images/slider-2.png";
import imgSlider3 from "/images/slider-3.png";
import imgSlider4 from "/images/slider-4.png";
import imgSlider5 from "/images/slider-5.png";
import imgSlider6 from "/images/slider-6.png";

function SlideShow() {
  const images = [
    imgSlider1,
    imgSlider2,
    imgSlider3,
    imgSlider4,
    imgSlider5,
    imgSlider6,
  ];

  return (
    <div className={styles.wrapper}>
      <Slider images={images} autoPlay={true} interval={6000} />
    </div>
  );
}

export default SlideShow;
