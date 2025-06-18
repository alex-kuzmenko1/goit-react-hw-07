import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Пошук контактів"
      value={filter}
      onChange={e => dispatch(setNameFilter(e.target.value))}
    />
  );
};

export default SearchBox;
