import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label>
        Фільтр контактів:
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(setNameFilter(e.target.value))}
          placeholder="Пошук за іменем"
        />
      </label>
    </div>
  );
};

export default Filter;