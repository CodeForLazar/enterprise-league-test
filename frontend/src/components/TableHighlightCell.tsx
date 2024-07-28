import { Fragment } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

type TableCellProps = {
   text: string;
};

const TableHighlightCell = ({ text }: TableCellProps) => {
   const { searchQuery } = useGlobalContext();

   const highlightedText = () => {
      const index = text.toLowerCase().indexOf(searchQuery.toLowerCase());
      if (index !== -1) {
         const beforeMatch = text.slice(0, index);
         const match = text.slice(index, index + searchQuery.length);
         const afterMatch = text.slice(index + searchQuery.length);
         return (
            <Fragment>
               {beforeMatch}
               <span style={{ color: 'red', fontWeight: 600 }}>{match}</span>
               {afterMatch}
            </Fragment>
         );
      } else {
         return text;
      }
   };

   return <td>{highlightedText()}</td>;
};

export default TableHighlightCell;
