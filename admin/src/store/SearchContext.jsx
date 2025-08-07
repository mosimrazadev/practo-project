import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

    const [searchData, setSearchData] = useState({location: "", doctorType: ""});

  return (
     <SearchContext.Provider value ={{searchData, setSearchData}}>
        {children}
     </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext);