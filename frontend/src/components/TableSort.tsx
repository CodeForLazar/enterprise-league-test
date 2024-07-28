import { useState, ChangeEvent } from 'react';
import { HeaderProps } from './Header';

type TableSortProps = Pick<HeaderProps, 'setTableData'>;
type SortOptions = 'author' | 'title' | 'genre';

const TableSort = ({ setTableData }: TableSortProps) => {
   const [sortBy, setSortBy] = useState<SortOptions>('author');

   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const sortBy = e.target.value as SortOptions;
      setSortBy(sortBy);
      setTableData((prevState) => {
         return [...prevState].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      });
   };

   return (
      <div className='sort-wrapper'>
         <span>Sort By</span>
         <select value={sortBy} onChange={handleChange}>
            <option value='author'>Author Name</option>
            <option value='title'>Title</option>
            <option value='genre'>Genre</option>
         </select>
      </div>
   );
};

export default TableSort;
