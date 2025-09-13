import { Row, Col } from "../../components/GridSystem";
import styles from "./Login.module.scss";

function Login() {
  return (
    <div>
      {/* Row + Col bình thường */}
      <Row>
        <Col span={12} sm={6} lg={3}>
          <div className={styles.item}>Item 1</div>
        </Col>
        <Col span={12} sm={6} lg={3}>
          <div className={styles.item}>Item 2</div>
        </Col>
        <Col span={12} sm={6} lg={3}>
          <div className={styles.item}>Item 3</div>
        </Col>
        <Col span={12} sm={6} lg={3}>
          <div className={styles.item}>Item 4</div>
        </Col>
      </Row>
    </div>
  );
}
export default Login;
