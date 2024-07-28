import { type Dispatch, type SetStateAction } from 'react';
import TableFilter from './TableFilter';
import TableSort from './TableSort';

export type HeaderProps = {
   setTableData: Dispatch<SetStateAction<Books>>;
   books: Books;
};

const Header = ({ setTableData, books }: HeaderProps) => {
   return (
      <div className='header'>
         <div className='header-text'>
            <h1 className='text-base font-semibold leading-6 text-gray-900'>Books</h1>
            <p className='mt-2 text-sm text-gray-700'>
               A list of all the books including their title, author, genre and rating.
            </p>
         </div>
         <div className='filters-container'>
            <TableSort setTableData={setTableData} />
            <TableFilter books={books} setTableData={setTableData} />
         </div>
      </div>
   );
};

export default Header;
