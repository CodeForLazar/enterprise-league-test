import TableHighlightCell from './TableHighlightCell';

type TableProps = {
   books: Books;
   isLoading: boolean;
};

const Table = ({ books, isLoading }: TableProps) => {
   return (
      <div className='table-container'>
         {isLoading ? (
            <p>Loading...</p>
         ) : books.length === 0 ? (
            <p>No Results</p>
         ) : (
            <table className='min-w-full divide-y divide-gray-300'>
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Author</th>
                     <th>Genre</th>
                     <th>Rating</th>
                  </tr>
               </thead>
               <tbody className='divide-y divide-gray-200'>
                  {books?.map((book) => (
                     <tr key={book.id}>
                        <TableHighlightCell text={book.title} />
                        <TableHighlightCell text={book.author} />
                        <TableHighlightCell text={book.genre} />
                        <td>{book.rating}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
};

export default Table;
