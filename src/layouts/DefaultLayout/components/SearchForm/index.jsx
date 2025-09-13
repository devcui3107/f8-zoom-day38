import styles from "./SearchForm.module.scss";
import iconSearch from "/icons/search.svg";

function SearchForm() {
  return (
    <div className={styles.search}>
      <img src={iconSearch} alt="search-form" className={styles.searchIcon} />
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Tìm kiếm khoá học, bài viết, video,..."
      />
    </div>
  );
}
export default SearchForm;
