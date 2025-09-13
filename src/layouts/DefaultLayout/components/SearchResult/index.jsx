import SearchResultDetail from "./SearchResultDetail";

import styles from "./SearchResult.module.scss";
import iconSearch from "/icons/search.svg";

function SearchResult() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={iconSearch} alt="" className={styles.headerIcon} />
        <p className={styles.headerText}>
          Kết quả cho '<span>javascript</span>'
        </p>
      </div>
      <SearchResultDetail />
    </div>
  );
}
export default SearchResult;
