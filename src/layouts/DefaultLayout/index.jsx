import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
