import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import useFetchHook from './hooks/useFetchHook';

const App = () => {
   const { data, loading } = useFetchHook<Books>({ url: '/api/book/all' });
   const [tableData, setTableData] = useState<Books>([]);

   const initialSortByAuthor = useMemo(() => {
      return data.sort((a, b) => a.author.localeCompare(b.author));
   }, [data]);

   useEffect(() => {
      setTableData(initialSortByAuthor);
   }, [initialSortByAuthor]);

   return (
      <div className='container'>
         <Header books={data} setTableData={setTableData} />
         {loading ? <h2>Loading. . .</h2> : <Table books={tableData} isLoading={loading} />}
      </div>
   );
};

export default App;
