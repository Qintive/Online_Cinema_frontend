import { ChangeEvent, FC } from "react"
import styles from './SearchField.module.scss';
import { MaterialIcon } from "../MaterialIcon";

interface IsearchField {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField:FC<IsearchField> = ({searchTerm, handleSearch}) => {
    return(
        <div className={styles.search}>
          <MaterialIcon name="MdSearch"/>
          <input placeholder="Search" value={searchTerm} onChange={handleSearch}/>
        </div>
    )
}

export default SearchField;