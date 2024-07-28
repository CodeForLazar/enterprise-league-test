import {
   createContext,
   useContext,
   useState,
   type ReactNode,
   type Dispatch,
   type SetStateAction
} from 'react';

interface GlobalContextType {
   setSearchQuery: Dispatch<SetStateAction<string>>;
   searchQuery: string;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
   const [searchQuery, setSearchQuery] = useState('');

   return (
      <GlobalContext.Provider value={{ searchQuery, setSearchQuery }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = (): GlobalContextType => {
   const context = useContext(GlobalContext);
   if (!context) {
      throw new Error('useGlobalContext must be used within a GlobalProvider');
   }
   return context;
};
