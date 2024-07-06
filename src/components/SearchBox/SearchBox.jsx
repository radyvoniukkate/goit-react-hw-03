import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearchChange }) => {
    return (
      <div className={styles.box}>
        <label htmlFor="inputSearch">Find contacts by name</label>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          className={styles.input}
          id="inputSearch"
        />
      </div>
    );
};

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
