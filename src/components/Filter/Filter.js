import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterReducer";
import { selectFilter } from "redux/selectors";
import css from './Filter.module.css';

export const Filter = () => {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch();

    const onChangeFilter = (event) => {
        dispatch(setFilter(event.target.value.toLowerCase()))
    }

    return (
        <label className={css.filterLable}>
            Find contacts by name
            <input className={css.filterInput} 
                type="text" 
                value={filter} 
                onChange={onChangeFilter} >
            </input>
        </label>
    )
}
