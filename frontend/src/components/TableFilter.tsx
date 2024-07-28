import { useState, type KeyboardEvent } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import { HeaderProps } from './Header';
import { useGlobalContext } from '../context/GlobalContext';

type TableFilterProps = HeaderProps;

const TableFilter = ({ books, setTableData }: TableFilterProps) => {
   const { setSearchQuery } = useGlobalContext();
   const [filter, setFilter] = useState('');

   const handleSearch = () => {
      const lowerCaseSearchTerm = filter.toLowerCase();
      const filterResults = books.filter((book) => {
         const title = book.title.toLowerCase().includes(lowerCaseSearchTerm);
         const author = book.author.toLowerCase().includes(lowerCaseSearchTerm);
         const genre = book.genre.toLowerCase().includes(lowerCaseSearchTerm);
         return title || author || genre;
      });
      setTableData(filterResults);
      setSearchQuery(filter);
   };
   const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };
   return (
      <div className='filter-wrapper'>
         <Input
            value={filter}
            onKeyDown={onKeyDown}
            onChange={(e) => setFilter(e.target.value)}
            placeholder='Have something in mind?'
         />
         <Button onClick={handleSearch}>Search</Button>
      </div>
   );
};

export default TableFilter;
