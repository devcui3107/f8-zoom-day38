import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@/components/Button";

import styles from "./GoToTop.module.scss";
import arrowUp from "/icons/arrow-up.svg";

function GoToTop({ distance = 300 }) {
  const [showIcon, setShowIcon] = useState(false);
  const classNames = clsx(styles.scrollTopBtn, distance);

  const returnTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Quay lên đầu trang
  };

  useEffect(() => {
    const handleScrollTop = () => {
      if (window.scrollY >= distance) {
        setShowIcon(true);
      } else if (window.scrollY < distance) {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScrollTop);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [distance]);

  return (
    showIcon && (
      <Button className={classNames} onClick={returnTop}>
        <img src={arrowUp} alt="Go to top" />
      </Button>
    )
  );
}

export default GoToTop;
