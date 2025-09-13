import { useState } from "react";
import DropdownStyles from "../../../../components/DropdownStyles";
import SearchResult from "../SearchResult";

import styles from "./SearchForm.module.scss";
import iconSearch from "/icons/search.svg";

// Function Support
const handleFocus = (callback) => {
  callback(true);
};
const handleBlur = (callback) => {
  callback(false);
};

function SearchForm() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <img src={iconSearch} alt="search-form" className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Tìm kiếm khoá học, bài viết, video,..."
          onFocus={() => handleFocus(setOpen)}
          onBlur={() => handleBlur(setOpen)}
        />
      </div>
      {open && (
        <DropdownStyles>
          <SearchResult />
        </DropdownStyles>
      )}
    </div>
  );
}
export default SearchForm;
