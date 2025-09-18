import SearchResultDetail from "./SearchResultDetail";
import DropdownStyles from "@/components/DropdownStyles";

import styles from "./SearchResult.module.scss";
import iconSearch from "/icons/search.svg";

function SearchResult() {
  return (
    <div className={styles.wrapper}>
      <DropdownStyles>
        <div className={styles.result}>
          <div className={styles.header}>
            <img src={iconSearch} alt="" className={styles.headerIcon} />
            <p className={styles.headerText}>
              Kết quả cho '<span>javascript</span>'
            </p>
          </div>
          <SearchResultDetail />
        </div>
      </DropdownStyles>
    </div>
  );
}
export default SearchResult;
